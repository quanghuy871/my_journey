const DUMMY_QUIZ = [
  {
    question: 'What is AngularJs?',
    answer: 'Framework',
    options: {
      A: 'Framework',
      B: 'Library',
    }
  },

  {
    question: 'What is ReactJs?',
    answer: 'Library',
    options: {
      A: 'Framework',
      B: 'Library',
    }
  }
]

class App {
  _quizLocation = document.querySelector('.quiz');
  _submit = document.querySelector('.submit');
  _next = document.querySelector('.next');
  _questionDisplay = {};
  _question = 0;

  constructor() {
    this.event();
  }

  event() {
    this.addQuiz();
    this.nextQuiz();
    this.submitQuiz();
  }

  addQuiz() {
    this._questionDisplay = DUMMY_QUIZ[this._question];
    const markup = `
    <div>
      <h4 style="margin-bottom: 0">${this._questionDisplay.question}</h4>
      <input class="check-box" type="checkbox" id="quesA" value="${this._questionDisplay.options.A}">
      <label for="quesA">${this._questionDisplay.options.A}</label><br>
      
      <input class="check-box" type="checkbox" id="quesB" value="${this._questionDisplay.options.B}">
      <label for="quesB">${this._questionDisplay.options.B}</label>
    </div>
    `;

    this._quizLocation.innerHTML = '';
    document.querySelector('.results').textContent = '';
    this._quizLocation.insertAdjacentHTML('afterbegin', markup);
  }

  answer() {
    let answer = '';
    document.querySelectorAll('.check-box').forEach(el => {
      if (el.checked === true) {
        answer = el.value;
      }
    })
    return answer;
  }

  nextQuiz() {
    this._next.addEventListener('click', function (e) {
      e.preventDefault();
      if (this._question + 1 < DUMMY_QUIZ.length) {
        this._question++;
        this.addQuiz();
      }
    }.bind(this))
  }

  submitQuiz() {
    this._submit.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelectorAll('.check-box').forEach(el => el.disabled = true);
      this.checkAnswer();
    }.bind(this))
  }

  checkAnswer() {
    if (this.answer() === this._questionDisplay.answer) {
      document.querySelector('.results').textContent = 'CORRECT';
    } else {
      document.querySelector('.results').textContent = 'INCORRECT';
    }
  }
}

new App();