export default class Cursor {
  #index = -1;
  #maxLength: number;

  constructor(maxLength: number) {
    this.#maxLength = maxLength;
  }

  next() {
    if (this.#index < this.#maxLength - 1) {
      this.#index++;
    } else {
      this.#index = 0;
    }

    return this.#index;
  }

  prev() {
    if (this.#index > 0) {
      this.#index--;
    } else {
      this.#index = this.#maxLength - 1;
    }

    return this.#index;
  }

  jumpTo(index: number) {
    if (index < this.#maxLength && index >= 0) {
      this.#index = index;
    }

    return this.#index;
  }

  get index() {
    return this.#index;
  }
}
