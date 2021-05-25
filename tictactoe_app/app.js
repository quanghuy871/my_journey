class App {
  #status = document.querySelector('.game--status');
  #gameActive = true;
  #firstTurn = 'X';
  #Condition = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];
  #state = ['', '', '', '', '', '', '', '', ''];

  constructor() {
    this.event();
  }

  event() {
    document.querySelectorAll('.cell').forEach(el => {
      el.addEventListener('click', this.keyDispatcher.bind(this));
    });
    document.querySelector('.game--restart').addEventListener('click', this.clearInput);
  }

  keyDispatcher(e) {
    e.preventDefault()
    if (this.#gameActive) {
      const index = Number(e.target.getAttribute('data-cell-index'));
      if (e.target.textContent !== '') return;

      this.input(e.target, index);
      this.checkInput();
      this.changeTurn(e.target);
    }
  }

  input(target, index) {
    this.#state[index] = this.#firstTurn;
    target.textContent = this.#firstTurn;
  }

  checkInput() {
    let roundWin = false;
    for (let i = 0; i <= this.#Condition.length - 1; i++) {
      const winCondition = this.#Condition[i];
      let a = this.#state[winCondition[0]];
      let b = this.#state[winCondition[1]];
      let c = this.#state[winCondition[2]];

      if (a === '' || b === '' || c === '') {
        continue;
      }

      if (a === b && b === c) {
        roundWin = true;
        break;
      }
    }

    if (roundWin) {
      this.#status.textContent = `${this.#firstTurn} WIN the game!!!`;
      this.#gameActive = false;
      return;
    }
    this.checkDraw();
  }

  checkDraw() {
    if (this.#state.every(el => el !== '')) {
      this.#status.textContent = 'Still not win the game';
    }
  }

  changeTurn(target) {
    this.#firstTurn = target.textContent === 'O' ? 'X' : 'O';
  }

  clearInput() {
    location.reload();
  }
}

new App();