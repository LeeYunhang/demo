const { observable, autorun } = require('mobx')

const student = observable({
  name: 'mrcode',
  age: 20
})

autorun(() => console.log(student.age))

student.name = 'new'

console.log(Object.getOwnPropertyDescriptor(student, 'age'))