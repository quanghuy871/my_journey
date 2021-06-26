class App {
  _input = document.querySelector('input');
  _eating = document.querySelector('.eating');
  _invest = document.querySelector('.invest');
  _saving = document.querySelector('.saving');
  _self = document.querySelector('.self');
  _enjoy = document.querySelector('.enjoy');
  _giving = document.querySelector('.giving');
  _click = document.querySelector('.btn-click');
  _box = document.querySelector('.box');

  constructor() {
    this.event()
  }

  event() {
    this._click.addEventListener('click', this.keyDispatcherClick.bind(this));
    this._box.addEventListener('keydown', this.keyDispatcher.bind(this));
  }

  keyDispatcher(e) {
    if (e.keyCode === 13) {
      e.preventDefault();
      this.runCode();
    }
  }

  keyDispatcherClick(e) {
    e.preventDefault();
    this.runCode();
  }

  runCode() {
    this._eating.textContent = this.onEating(+this._input.value);
    this._invest.textContent = this.onInvest(+this._input.value);
    this._saving.textContent = this.onSaving(+this._input.value);
    this._self.textContent = this.onSelf(+this._input.value);
    this._enjoy.textContent = this.onEnjoy(+this._input.value);
    this._giving.textContent = this.onGiving(+this._input.value);
  }

  onEating(budget) {
    return budget * 55 / 100;
  }

  onInvest(budget) {
    return budget * 10 / 100;
  }

  onSaving(budget) {
    return budget * 10 / 100;
  }

  onSelf(budget) {
    return budget * 10 / 100;
  }

  onEnjoy(budget) {
    return budget * 10 / 100;
  }

  onGiving(budget) {
    return budget * 5 / 100;
  }
}

new App();