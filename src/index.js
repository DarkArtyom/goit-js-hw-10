import './css/styles.css';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

import API from './js/fetchCountries';

var debounce = require('lodash.debounce');
const DEBOUNCE_DELAY = 300;

const inputEl = document.querySelector('#search-box');
const countryListEl = document.querySelector('.country-list');
const countryInfo = document.querySelector('.country-info');

inputEl.addEventListener('input', debounce(onInput, DEBOUNCE_DELAY));

function onInput(e) {
  e.preventDefault();
  const inputValue = e.target.value.trim();
  console.log(API.fetchCountries(inputValue));
  if (inputValue === '') {
    return;
  }
  API.fetchCountries(inputValue).then(renderCountries).catch(onFetchError);
  // .finnaly(() => inputEl.reset());
}

function renderCountries(inputValue) {
  if (inputValue.length === 1) {
    const countryTaken = inputValue.map(countryEl => {
      const languageCountry = Object.values(countryEl.languages);
      const countryDetaILS = `<div><img src=${countryEl.flags.svg} width="30" alt="flag" class="flag" /><h2>${countryEl.name.official}</h2></div><p>Capital: ${countryEl.capital}</p><p>Population: ${countryEl.population}</p><p>Languages: ${languageCountry}`;
      return countryDetaILS;
    });
    countryInfo.innerHTML = countryTaken;
    console.log('array 1');
  } else {
    const listOfChoosenCountries = inputValue.map(arrCountries => {
      const renderListCountries = document.createElement('li');

      const addFlagList = document.createElement('img');
      addFlagList.src = `${arrCountries.flags.svg}`;
      addFlagList.setAttribute = `alt: flag`;
      addFlagList.setAttribute = `width=30`;

      renderListCountries.append(addFlagList);

      const addCountryName = document.createElement('p');
      addCountryName.textContent = `${arrCountries.name.official}`;
      renderListCountries.append(addCountryName);

      return renderListCountries;
    });

    console.log(`array 2 and more`);
    countryListEl.innerHTML = listOfChoosenCountries;
  }
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
