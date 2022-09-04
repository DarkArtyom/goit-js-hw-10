const BASE_URL = 'https://restcountries.com/v3.1';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

function fetchCountries(name) {
  const findCountry = fetch(
    `${BASE_URL}/name/${name}?fields=name,capital,population,flags,languages`
  )
    .then(response => {
      console.log(response);
      if (!response.ok) {
        Notify.failure(`Oops, there is no country with that name`);
      }

      return response.json();
    })
    .catch(error =>
      Notify.failure(`Oops ${error}, there is no country with that name`)
    );
  // if (!findCountry.ok === 0) {
  //   Notify.failure(
  //     'Search Failure',
  //     '`Oops, there is no country with that name`'
  //   );
  // }

  return findCountry;
}

export default { fetchCountries };
