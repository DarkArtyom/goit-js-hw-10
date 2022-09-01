import './css/styles.css';
import Notiflix from 'notiflix';

const DEBOUNCE_DELAY = 300;

const inputEl = document.querySelector('#search-box');

var debounce = require('lodash.debounce');

inputEl.addEventListener('input', debounce(onInput, DEBOUNCE_DELAY));
function onInput(e) {
  const inputValue = e.target.value;
  console.log(inputValue);
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
