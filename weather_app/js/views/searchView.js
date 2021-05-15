import * as model from '../model.js';


class SearchView {
  _parent = document.querySelector('input');
  _msg = document.querySelector('.msg');

  getQuery() {
    const query = document.querySelector('input').value;
    this.clearInput();

    const result = model.state.search.results.some(el => el.name.toLowerCase() === query.toLowerCase());

    if (result) {
      this._generateMarkup();
    } else {
      return query;
    }
  }


  addHandler(handler) {
    document.querySelector('button').addEventListener('click', function (e) {
      e.preventDefault();
      handler();
    })
  }

  _generateMarkup() {
    this._msg.textContent = 'Please fill a valid city';
  }

  clearInput() {
    this._parent.value = '';
    this._msg.textContent = '';
  }
}

export default new SearchView();