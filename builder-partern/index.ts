abstract class Item {
  abstract name(): String
  abstract packing(): Packing
  abstract price(): Number
}

abstract class Packing {
  abstract packing(): String
}

class Bottle extends Packing {
  packing(): String {
    return 'Bottle'
  }
}

class Wrapper extends Packing {
  packing(): String {
    return 'Wrapper'
  }
}

abstract class Burger extends Item {
  packing(): Packing {
    return new Wrapper()
  }
}

abstract class ColdDrink extends Item {
  packing(): Packing {
    return new Bottle()
  }
}

class Coke extends ColdDrink {
  name(): String {
    return 'Coke'
  }
  price(): Number {
    return 3
  }
}

class Pepsi extends ColdDrink {
  name(): String {
    return 'Pepsi'
  }
  price(): Number {
    return 2.5
  }
}

class VegBurger extends Burger {
  name(): String {
    return 'VegBurger'
  }

  price(): Number {
    return 15
  }
}

class ChickenBurger extends Burger {
  name(): String {
    return 'ChickenBurger'
  }
  price(): Number {
    return 30
  }
}

class Meal {
  private items: Item[] = []

  public addItem(item: Item): void {
    this.items.push(item)
  }

  public showItems(): void {
    this.items.forEach(item => {
      console.log(`Item: ${item.name()}`)
      console.log(`Packing: ${item.packing()}`)
      console.log(`Price: ${item.price()}`)
      console.log(' ')
    })
  }
}

class MealBuilder {
  public prepareVegMeal(): Meal {
    let meal = new Meal()
    meal.addItem(new VegBurger())
    meal.addItem(new Coke())
    
    return meal
  }

  public prepareChickenMeal(): Meal {
    let meal = new Meal()
    meal.addItem(new ChickenBurger())
    meal.addItem(new Pepsi())
    
    return meal
  }
}

(function() {
  let mealBuilder = new MealBuilder()
  let vegMeal = mealBuilder.prepareVegMeal()
  let chickenMeal = mealBuilder.prepareVegMeal()

  vegMeal.showItems()
  chickenMeal.showItems()
})()
