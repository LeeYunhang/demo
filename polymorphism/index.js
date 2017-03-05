'use strict';

var _set = function set(object, property, value, receiver) {
  var desc = Object.getOwnPropertyDescriptor(object, property);
  if (desc === undefined) {
    var parent = Object.getPrototypeOf(object);
    if (parent !== null) {
      set(parent, property, value, receiver);
    }
  } else if ("value" in desc && desc.writable) {
    desc.value = value;
  } else {
    var setter = desc.set;
    if (setter !== undefined) {
      setter.call(receiver, value);
    }
  }
  return value;
};

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return call && (typeof call === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

var Person = function Person() {
  var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'xxx';
  var age = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 10;

  _classCallCheck(this, Person);

  this.name = name;
  this.age = age;
};

var Student = function (_Person) {
  _inherits(Student, _Person);

  function Student(name, age, no) {
    _classCallCheck(this, Student);

    var _this = _possibleConstructorReturn(this, (Student.__proto__ || Object.getPrototypeOf(Student)).call(this, name, age));

    _this.no = no;
    _set(Student.prototype.__proto__ || Object.getPrototypeOf(Student.prototype), 'age', 1, _this);
    return _this;
  }

  return Student;
}(Person);

var stu = new Student('mrcode', 20, '11403080435');

var keys = Object.keys(stu.__proto__);
for (var key in keys) {
  console.log(stu.__proto__[key]);
}