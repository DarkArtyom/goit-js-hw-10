import './css/styles.css';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import API from './js/fetchCountries';
import RENDER from './js/renderCountries';

var debounce = require('lodash.debounce');
const DEBOUNCE_DELAY = 300;

const inputEl = document.querySelector('#search-box');

inputEl.addEventListener('input', debounce(onInput, DEBOUNCE_DELAY));

function onInput(e) {
  e.preventDefault();
  const inputValue = e.target.value.trim();
  // console.log(API.fetchCountries(inputValue));
  if (inputValue === '') {
    Notify.info('Please, fill the input');
    return;
  }
  if (inputValue.length > 10) {
    alert('too many countries');
  }
  API.fetchCountries(inputValue)
    .then(RENDER.renderCountries)
    .catch(onFetchError);
  // .finnaly(//   () => inputEl.reset()// );
}

function onFetchError(error) {
  console.log(`${error} Oops, there is no country with that name`);
}

// 1написать функцию fetchCountries(name) которая делает HTTP-запрос на ресурс name и возвращает промис с массивом стран - результатом

// Тебе нужны только следующие свойства:
// name.official - полное имя страны
// capital - столица
// population - население
// flags.svg - ссылка на изображение флага
// languages - массив языков

// 3. выводи уведомление Report.info('Notiflix Info','"Too many matches found. Please enter a more specific name." <br/><br/>- Carl Gustav Jung','Okay',);

// 4. Явно указать если страны нет, при этом 404 ошибку словить Notify.failure("Oops, there is no country with that name")
