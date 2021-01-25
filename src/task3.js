// 1.
Array.prototype.first = function () {
  return this[0];
};

Array.prototype.last = function () {
  return this[this.length - 1];
};

Array.prototype.random = function () {
  return this[Math.floor(Math.random() * this.length)];
};

// 2.
function createClass(args) {
  'use strict';
  return function (...constructorArgs) {
    const { constructor, ...props } = args;
    args.constructor.call(this, ...constructorArgs);
    for (const prop in props) {
      const value = props[prop];
      Object.defineProperty(this, prop, {
        value,
        enumerable: typeof value !== 'function',
      });
    }
  };
}

// 3.
class Car {
  type = "car";

  getModel() {
    return this.model;
  }

  constructor() {
    // this.type = 'car';
  }
}

class Audi {
  brand = 'Audi';

  constructor(model) {
    this.model = model;
  }
}

function extend(ChildClass, ParentClass) {
  Object.setPrototypeOf(ChildClass.prototype, new ParentClass);
}

extend(Audi, Car);

const car = new Car();
const audi = new Audi('A8');

console.log(audi.type);
console.log(audi.getModel());
console.log(audi);
