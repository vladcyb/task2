function Calculator(initialValue) {
  if (!new.target) {
    throw Error('Called without new!');
  }
  let accumulator = initialValue;
  let result = 0;

  this.plus = function (value) {
    result += accumulator;
    accumulator = value;
    return this;
  };

  this.minus = function (value) {
    result += accumulator;
    accumulator = -value;
    return this;
  };

  this.multiply = function (value) {
    accumulator *= value;
    return this;
  };

  this.divide = function (value) {
    accumulator /= value;
    return this;
  };

  this.calculate = function () {
    return result + accumulator;
  };
}

/*
console.log(
  new Calculator(23)
    .minus(3)
    .multiply(-234)
    .divide(5)
    .plus(3.5)
    .calculate(),
);
*/
