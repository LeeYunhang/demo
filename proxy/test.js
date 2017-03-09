

function Person(name, age) {
  this.name = name
  this.age = age
}

function extend(sup, base) {
  let descriptor = Reflect.getOwnPropertyDescriptor(base.prototype, 'constructor')
  base.prototype = Object.create(sup.prototype)

  let handler = {
    construct(target, args) {
      let obj = Object.create(base.prototype)
      this.apply(target, obj, args)
      return obj
    },
    apply(target, that, args) {
      sup.apply(that, args)
      base.apply(that, args)
    }
  }

  let proxy = new Proxy(base, handler)
  descriptor.value = proxy
  Object.defineProperty(base.prototype, 'constructor', descriptor)
  return proxy
}

function extend1(sup, base) {
  base.prototype = Object.create(sup.prototype)

  handler = {
    constructor(target, args) {
      let obj = Object.create(base.prototype)
      this.apply(target, obj, args)
    },

    apply(target, that, args) {
      sup.apply(that, args)
      base.apply(that, args)
    }
  }

  base.prototype.construct = new Proxy(base, handler)
  return base
}

let Student = extend1(Person, function(name, age, no) {
  this.no = no
})

let student = new Student('mrcode', 20, 114030804)
console.log(student.no)
console.log(student instanceof Person)
