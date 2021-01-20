class Calculator {
  #value: number;

  constructor(value: number) {
    this.#value = value;
  }

  plus(value: number) {
    this.#value += value;
    return this;
  }

  minus(value: number) {
    this.#value -= value;
    return this;
  }

  multiply(value: number) {
    this.#value *= value;
    return this;
  }

  divide(value: number) {
    this.#value /= value;
    return this;
  }

  calculate() {
    return this.#value;
  }
}
