class App {
  #passLength = document.querySelector('#len');
  #upper = document.querySelector('#upper');
  #lower = document.querySelector('#lower');
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
    for (let i = 0; i < Number(this.#passLength.value); i++) {
      const rand = Math.round(Math.random() * 26) + 96;
      this.#state.push(String.fromCharCode(rand));
    }
    this.#field.textContent = this.#state.join('');
    this.#state = [];
  }

  checkUpper(len) {
    
  }
}

new App();