class App {
  #passLength = document.querySelector('#len');
  #upper = document.querySelector('#upper');
  #number = document.querySelector('#number');
  #symbol = document.querySelector('#symbol');
  #field = document.querySelector('#pw');
  #btn = document.querySelector('.generate');
  #state = [];

  constructor() {
    this.event();
  }

  event() {
    this.#btn.addEventListener('click', this.keyDispatcher.bind(this));
  }

  keyDispatcher(e) {
    e.preventDefault();
    if (this.#upper.checked === true && this.#number.checked !== true && this.#symbol.checked !== true) {
      const lenLeft = Math.floor(this.#passLength.value / 2);
      const lenRight = Math.ceil(this.#passLength.value / 2);
      this.normal(lenLeft);
      this.checkUpper(lenRight);
      this.render();
      return;
    }

    if (this.#number.checked === true && this.#upper.checked !== true && this.#symbol.checked !== true) {
      const lenLeft = Math.floor(this.#passLength.value / 2);
      const lenRight = Math.ceil(this.#passLength.value / 2);
      this.normal(lenLeft);
      this.checkNumber(lenRight);
      this.render();
      return;
    }

    if (this.#symbol.checked === true && this.#number.checked !== true && this.#upper.checked !== true) {
      const lenLeft = Math.floor(this.#passLength.value / 2);
      const lenRight = Math.ceil(this.#passLength.value / 2);
      this.normal(lenLeft);
      this.checkSymbol(lenRight);
      this.render();
      return;
    }

    if (this.#upper.checked === true && this.#number.checked === true && this.#symbol.checked === true) {
      const half1 = Math.floor(Math.random() * this.#passLength.value) - 5;
      const half2 = this.#passLength.value - half1 - 2;
      const half3 = this.#passLength.value - (half1 + half2);

      this.checkSymbol(half1);
      this.checkNumber(half2);
      this.checkUpper(half3);
      this.render();
      return;
    }

    if (this.#upper.checked === true && this.#number.checked === true) {
      const half1 = Math.floor(Math.random() * this.#passLength.value);
      const half2 = this.#passLength.value - half1;

      this.checkNumber(half1);
      this.checkUpper(half2);
      this.render();
      return;
    }

    if (this.#upper.checked === true && this.#symbol.checked === true) {
      const half1 = Math.floor(Math.random() * this.#passLength.value);
      const half2 = this.#passLength.value - half1;

      this.checkSymbol(half1);
      this.checkUpper(half2);
      this.render();
      return;
    }

    if (this.#number.checked === true && this.#symbol.checked === true) {
      const half1 = Math.floor(Math.random() * this.#passLength.value);
      const half2 = this.#passLength.value - half1;

      this.checkSymbol(half1);
      this.checkNumber(half2);
      this.render();
      return;
    }

    this.normal(Number(this.#passLength.value));
    this.render();
  }

  normal(len) {
    for (let i = 0; i <= len; i++) {
      const rand = Math.round(Math.random() * 26) + 96;
      this.#state.push(String.fromCharCode(rand));
    }
  }

  checkUpper(len) {
    for (let i = 0; i <= len; i++) {
      const rand = Math.round(Math.random() * 26) + 65;
      this.#state.push(String.fromCharCode(rand));
    }
  }

  checkNumber(len) {
    for (let i = 0; i <= len; i++) {
      const rand = Math.round(Math.random() * 10) + 48;
      this.#state.push(String(String.fromCharCode(rand)));
    }
  }

  checkSymbol(len) {
    for (let i = 0; i <= len; i++) {
      const rand = Math.round(Math.random() * 15) + 33;
      this.#state.push(String(String.fromCharCode(rand)));
    }
  }

  render() {
    this.#field.textContent = this.#state.sort(() => Math.random() - 0.5).join('');
    this.#state = [];
  }
}

new App();