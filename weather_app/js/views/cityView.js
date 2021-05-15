class cityView {
  _parent = document.querySelector('.cities');
  _data;

  _render(data) {
    this._data = data;
    this._parent.insertAdjacentHTML('afterbegin', this._generateMarkup());
  }

  _generateMarkup() {
    return `
    <li class="city">
        <h2 class="city-name">
          <span>${this._data.name}</span>
          <sup>${this._data.country}</sup>
        </h2>
        <span class="city-temp">${this._data.temp}<sup>°C</sup></span>
        <figure>
          <img class="city-icon" src="${this._data.icon}" alt="">
          <figcaption>${this._data.description}</figcaption>
        </figure>
      </li>
    `
  }
}

export default new cityView();

