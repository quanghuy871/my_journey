class App {
  _budgetAmount = document.querySelector('#budget-amount');
  _expenseAmount = document.querySelector('#expense-amount');
  _balanceAmount = document.querySelector('#balance-amount');

  _expenseInputTitle = document.querySelector('#expense-input');
  _expenseInputAmount = document.querySelector('#amount-input');
  _budgetInputAmount = document.querySelector('.budget-input');

  _addBudgetBtn = document.querySelector('.budget-submit');
  _addExpenseBtn = document.querySelector('.expense-submit');

  _expenseFeedback = document.querySelector('.expense-feedback');
  _budgetFeedback = document.querySelector('.budget-feedback');

  _state = {
    results: [],
    budget: 0,
    expense: 0,
    balance: 0
  };

  constructor() {
    this.event();
  }

  event() {
    this._addBudgetBtn.addEventListener('click', this.addBudget.bind(this));
    this._addExpenseBtn.addEventListener('click', this.addExpense.bind(this));
  }

  controlExpense() {
    document.querySelectorAll('.edit-icon').forEach(el => {
      el.addEventListener('click', this.editExpense.bind(this));
    });
    document.querySelectorAll('.delete-icon').forEach(el => {
      el.addEventListener('click', this.deleteExpense.bind(this));
    });
  }

  cycleControl() {
    this.clearInput();
    this.renderExpenseItem();
    this.controlExpense();
  }

  editExpense(e) {
    e.preventDefault();
    const id = Number(e.target.closest('.edit-icon').getAttribute('data-id'));
    const element = this._state.results.find(el => el.id === id);
    this._state.results.splice(this._state.results.indexOf(element), 1);
    this._state.balance += element.amount;
    this._state.expense -= element.amount;
    this.cycleControl();
    this._expenseInputTitle.value = element.title;
    this._expenseInputAmount.value = element.amount;
  }

  deleteExpense(e) {
    e.preventDefault();
    const id = Number(e.target.closest('.delete-icon').getAttribute('data-id'));
    const element = this._state.results.find(el => el.id === id);
    this._state.results.splice(this._state.results.indexOf(element), 1);
    this.cycleControl();
  }

  addBudget(e) {
    e.preventDefault();
    if (this.checkInput('budget')) {
      this._state.budget += Number(this._budgetInputAmount.value);
      this._state.balance += Number(this._budgetInputAmount.value);
      this._budgetAmount.textContent = this._state.budget;
      this._balanceAmount.textContent = this._state.balance;
      this.clearInput();
    }
  }

  addExpense(e) {
    e.preventDefault();
    if (this.checkInput('expense')) {
      const expenseValue = Number(this._expenseInputAmount.value);
      const check = this._state.expense + expenseValue;
      if (this._state.budget < check) {
        this.displayFeedback('block', 'expense', 'Please input the valid amount!!');
        return;
      }
      this._state.results.push({
        id: Math.round(Math.random() * 5555),
        title: this._expenseInputTitle.value,
        amount: expenseValue
      });
      this._state.expense += expenseValue;
      this._state.balance -= expenseValue;
      this.cycleControl();
    }
  }

  renderExpenseItem() {
    this._expenseAmount.textContent = this._state.expense;
    this._balanceAmount.textContent = this._state.balance;
    const markup = this._state.results.map(el => {
      return `
           <div class="expense">
             <div class="expense-item d-flex justify-content-between align-items-baseline">
             <h6 class="expense-title mb-0 text-uppercase list-item">- ${el.title}</h6>
             <h5 class="expense-amount mb-0 list-item">${el.amount}</h5>
             <div class="expense-icons list-item">
             <a href="#" class="edit-icon mx-2" data-id="${el.id}">
                <span>Edit</span>
             </a>
             <a href="#" class="delete-icon" data-id="${el.id}">
                 <span>Delete</span>
             </a>
             </div>
             </div>
           </div>
    `
    }).join('');
    document.querySelector('.expense-list').insertAdjacentHTML('beforeend', markup);
  }

  checkInput(type) {
    if (type === 'budget') {
      if (this._budgetInputAmount.value.length !== 0) {
        this.displayFeedback('none', 'budget');
        return true;
      } else {
        this.displayFeedback('block', 'budget');
      }
    } else {
      if (this._expenseInputAmount.value.length !== 0 && this._expenseInputTitle.value.length !== 0) {
        this.displayFeedback('none', 'expense');
        return true;
      } else {
        this.displayFeedback('block', 'expense');
      }
    }
  }

  displayFeedback(style = 'none', type, message = 'Please fill in the form!!') {
    if (type === 'budget') {
      this._budgetFeedback.style.display = style;
      this._budgetFeedback.textContent = message;
    } else {
      this._expenseFeedback.style.display = style;
      this._expenseFeedback.textContent = message;
    }
  }

  clearInput() {
    this._expenseInputTitle.value = this._expenseInputAmount.value = '';
    this._budgetInputAmount.value = '';
    document.querySelector('.expense-list').innerHTML = '';
  }
}

new App();

let a = -1;
if (a) {
  console.log('true');
} else {
  console.log('false');
}


