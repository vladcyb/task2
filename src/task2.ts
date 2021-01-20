class Calculator {
  #accumulator: number;
  #result: number = 0;

  constructor(value: number) {
    this.#accumulator = value;
  }

  plus(value: number) {
    this.#result += this.#accumulator;
    this.#accumulator = value;
    return this;
  }

  minus(value: number) {
    this.#result += this.#accumulator;
    this.#accumulator = -value;
    return this;
  }

  multiply(value: number) {
    this.#accumulator *= value;
    return this;
  }

  divide(value: number) {
    this.#accumulator /= value;
    return this;
  }

  calculate() {
    return this.#result + this.#accumulator;
  }
}
