// class ToDoList {
//     _place = document.querySelector('.todo-list');
//     _addTask = document.querySelector('.add-task');
//     _allTask = document.querySelector('.all-task')
//     _activeTask = document.querySelector('.active-task')
//     _completeTask = document.querySelector('.completed-task')
//
//     constructor() {
//         this.event();
//     }
//
//     event() {
//         document.addEventListener('keydown', this.keyDispatcher.bind(this));
//         this._place.addEventListener('change', this.keyDispatcher.bind(this))
//         this._allTask.addEventListener('click', this.allTask.bind(this))
//         this._activeTask.addEventListener('click', this.activeTask.bind(this))
//         this._completeTask.addEventListener('click', this.completeTask.bind(this))
//     }
//
//     keyDispatcher(e) {
//         if (e.keyCode === 13 && e.which === 13) {
//             if (this._addTask.value !== '') {
//                 this.createBox(this._addTask.value);
//             }
//         }
//
//         e.target.closest('.todo-item').classList.toggle('complete');
//     }
//
//     allTask() {
//         this._place.classList.remove('only-complete');
//         this._place.classList.remove('only-active');
//         document.querySelector('li.active').classList.remove('active');
//         this._allTask.classList.add('active');
//     }
//
//     activeTask() {
//         this._place.classList.remove('only-complete');
//         this._place.classList.add('only-active');
//         document.querySelector('li.active').classList.remove('active');
//         this._activeTask.classList.add('active');
//     }
//
//     completeTask() {
//         this._place.classList.remove('only-active');
//         this._place.classList.add('only-complete');
//         document.querySelector('li.active').classList.remove('active');
//         this._completeTask.classList.add('active');
//     }
//
//     clearInput() {
//         this._addTask.value = '';
//     }
//
//     createBox(field) {
//         let html = `
//         <div class="todo-item">
//             <div class="checker"><span class=""><input class="check-box" type="checkbox"></span></div>
//             <span>${field}</span>
//             <a href="javascript:void(0);" class="float-right remove-todo-item"><i class="icon-close"></i></a>
//         </div>
//         `
//         this._place.insertAdjacentHTML('beforeend', html);
//         this.clearInput();
//     }
// }
//
// new ToDoList();

// class Calculator {
//     _data = []
//
//     constructor() {
//         this.event();
//     }
//
//     event() {
//         document.querySelectorAll('input').forEach(el => {
//             el.addEventListener('click', this.trigger.bind(this));
//         });
//     }
//
//     trigger(e) {
//         let value = e.target.defaultValue;
//         let answer = document.querySelector('#answer');
//         if (value !== '=') {
//             this._data.push(value);
//             this.display(this._data, value, answer);
//         } else {
//             this.display(this._data, value, answer);
//         }
//
//         if (value === 'C') {
//             this.delete(answer);
//         }
//     }
//
//     display(data, value, answer) {
//         if (value === '=') {
//             answer.value = eval(this._data.join(''));
//             this._data.push(eval(this._data.join('')));
//             this._data = this._data.slice(-1);
//         } else {
//             answer.value = this._data.join('');
//         }
//     }
//
//     delete(answer) {
//         answer.value = '';
//         this._data.length = 0
//     }
// }
//
// new Calculator();

// import * as model from './model.js';
// import searchView from "./views/searchView.js";
// import cityView from "./views/cityView.js";
//
// const controlCities = async function () {
//   try {
//     //get the query
//     const query = searchView.getQuery();
//     if (!query) return;
//
//     //get the result
//     await model.loadCitiesResults(query);
//
//     //render the result
//     cityView._render(model.state.search.results[model.state.search.results.length - 1]);
//   } catch (e) {
//     searchView._generateMarkup();
//   }
// }
//
// function init() {
//   searchView.addHandler(controlCities);
// }
//
// init();


// class tipCalculator {
//   _value = document.querySelector('#billamt');
//   _option = document.querySelector('#serviceQual');
//   _people = document.querySelector('#peopleamt');
//   _tip = document.querySelector('#tip')
//
//   constructor() {
//     this.event();
//   }
//
//   event() {
//     document.querySelector('#calculate').addEventListener('click', this.keyDispatcher.bind(this));
//   }
//
//   keyDispatcher(e) {
//     e.preventDefault();
//
//     if (Number(this._value.value) !== 0 && Number(this._people.value) !== 0) {
//       const tips = (Number(this._value.value) * Number(this._option.value)) / Number(this._people.value);
//       this._tip.textContent = String(tips.toFixed(2));
//       this.clear();
//     }
//   }
//
//   clear() {
//     this._value.value = this._people.value = this._option.value = ''
//   }
// }
//
// new tipCalculator();

class changeMe {
  constructor() {
    this.event();
  }

  event() {
    document.querySelector('button').addEventListener('click', this.keyDispatcher.bind(this))
  }

  keyDispatcher(e) {
    e.preventDefault();
    const red = Math.round(Math.random() * 255);
    const blue = Math.round(Math.random() * 255);
    const green = Math.round(Math.random() * 255);
    document.querySelector('body').style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
  }
}

new changeMe();















