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
  _question = 0;

  constructor() {
    this.event();
  }

  event() {
    this.addQuiz();
    this.nextQuiz();
  }

  addQuiz() {

  }

  nextQuiz() {
    this._next.addEventListener('click', function (e) {
      e.preventDefault();
      if (this._question + 1 < DUMMY_QUIZ.length) {
        this._question++;
      }
    }.bind(this))
  }

  submitQuiz() {

  }
}

new App();