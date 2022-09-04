const countryListEl = document.querySelector('.country-list');
const countryInfo = document.querySelector('.country-info');

function renderCountries(inputValue) {
  if (inputValue.length > 10) {
    return Notify.info(
      `Too many matches found. Please enter a more specific name.`
    );
  }
  if (inputValue.length === 1) {
    countryListEl.innerHTML = '';
    const countryTaken = inputValue.map(countryEl => {
      const languageCountry = Object.values(countryEl.languages);
      const countryDetaILS = `<div><img src=${countryEl.flags.svg} width="30" alt="flag" class="flag" /><h2>${countryEl.name.official}</h2></div><p>Capital: ${countryEl.capital}</p><p>Population: ${countryEl.population}</p><p>Languages: ${languageCountry}`;
      return countryDetaILS;
    });
    countryInfo.innerHTML = countryTaken;
    console.log('array 1');
  } else {
    countryInfo.innerHTML = '';
    const listOfChoosenCountries = inputValue.map(arrCountries => {
      const renderListCountries = document.createElement('li');
      renderListCountries.style.listStyle = 'none';
      renderListCountries.style.display = 'flex';
      renderListCountries.style.alignItems = 'center';

      const addFlagList = document.createElement('img');
      addFlagList.src = `${arrCountries.flags.svg}`;
      addFlagList.style.width = '40px';
      addFlagList.style.height = '20px';
      addFlagList.style.marginRight = '10px';
      addFlagList.setAttribute = `alt: "flag"`;

      renderListCountries.append(addFlagList);

      const addCountryName = document.createElement('p');
      addCountryName.textContent = `${arrCountries.name.official}`;
      renderListCountries.append(addCountryName);

      return renderListCountries;
    });

    console.log(`array 2 and more`);
    countryListEl.append(...listOfChoosenCountries);
    console.log(listOfChoosenCountries);
  }
}

export default { renderCountries };
