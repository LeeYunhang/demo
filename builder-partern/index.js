var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Item = (function () {
    function Item() {
    }
    return Item;
}());
var Packing = (function () {
    function Packing() {
    }
    return Packing;
}());
var Bottle = (function (_super) {
    __extends(Bottle, _super);
    function Bottle() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Bottle.prototype.packing = function () {
        return 'Bottle';
    };
    return Bottle;
}(Packing));
var Wrapper = (function (_super) {
    __extends(Wrapper, _super);
    function Wrapper() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Wrapper.prototype.packing = function () {
        return 'Wrapper';
    };
    return Wrapper;
}(Packing));
var Burger = (function (_super) {
    __extends(Burger, _super);
    function Burger() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Burger.prototype.packing = function () {
        return new Wrapper();
    };
    return Burger;
}(Item));
var ColdDrink = (function (_super) {
    __extends(ColdDrink, _super);
    function ColdDrink() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ColdDrink.prototype.packing = function () {
        return new Bottle();
    };
    return ColdDrink;
}(Item));
var Coke = (function (_super) {
    __extends(Coke, _super);
    function Coke() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Coke.prototype.name = function () {
        return 'Coke';
    };
    Coke.prototype.price = function () {
        return 3;
    };
    return Coke;
}(ColdDrink));
var Pepsi = (function (_super) {
    __extends(Pepsi, _super);
    function Pepsi() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Pepsi.prototype.name = function () {
        return 'Pepsi';
    };
    Pepsi.prototype.price = function () {
        return 2.5;
    };
    return Pepsi;
}(ColdDrink));
var VegBurger = (function (_super) {
    __extends(VegBurger, _super);
    function VegBurger() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    VegBurger.prototype.name = function () {
        return 'VegBurger';
    };
    VegBurger.prototype.price = function () {
        return 15;
    };
    return VegBurger;
}(Burger));
var ChickenBurger = (function (_super) {
    __extends(ChickenBurger, _super);
    function ChickenBurger() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ChickenBurger.prototype.name = function () {
        return 'ChickenBurger';
    };
    ChickenBurger.prototype.price = function () {
        return 30;
    };
    return ChickenBurger;
}(Burger));
var Meal = (function () {
    function Meal() {
        this.items = [];
    }
    Meal.prototype.addItem = function (item) {
        this.items.push(item);
    };
    Meal.prototype.showItems = function () {
        this.items.forEach(function (item) {
            console.log("Item: " + item.name());
            console.log("Packing: " + item.packing());
            console.log("Price: " + item.price());
            console.log(' ');
        });
    };
    return Meal;
}());
var MealBuilder = (function () {
    function MealBuilder() {
    }
    MealBuilder.prototype.prepareVegMeal = function () {
        var meal = new Meal();
        meal.addItem(new VegBurger());
        meal.addItem(new Coke());
        return meal;
    };
    MealBuilder.prototype.prepareChickenMeal = function () {
        var meal = new Meal();
        meal.addItem(new ChickenBurger());
        meal.addItem(new Pepsi());
        return meal;
    };
    return MealBuilder;
}());
(function () {
    var mealBuilder = new MealBuilder();
    var vegMeal = mealBuilder.prepareVegMeal();
    var chickenMeal = mealBuilder.prepareVegMeal();
    vegMeal.showItems();
    chickenMeal.showItems();
})();
