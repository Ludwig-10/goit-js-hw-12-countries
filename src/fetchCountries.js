import manyCountries from './templates/manyCountries.hbs';
import oneCountry from './templates/oneCountry.hbs';
import error from './pnotify.js';
import {searchContainer, searchInput, searchList} from './settings/refs.js';
import _debounce from 'lodash.debounce';


searchInput.addEventListener(
    'input',
    _debounce(event => {
      if (event.target.value) {
       searchList.innerHTML = '';
        searchContainer.innerHTML = '';
        fetchCountries(event.target.value);
      }
    }, 500),
  );
const fetchCountries = function(country){
    fetch(
        `https://restcountries.eu/rest/v2/name/${country}?fields=name;capital;languages;population;flag`)
        .then(response => response.json())
        .then(data => {
        if (data.length === 1){
            const markup = oneCountry(data)
            return searchContainer.insertAdjacentHTML('beforeend', markup);
        }
        if (data.length <= 10){
            const markup = manyCountries(data)
            return (searchList.innerHTML = markup)
        }
        
        if (data.length) {
            return error();
          }
    })
    .catch(() => alert('Something went wrong... Try again!'));
};
    // export default fetchCountries;
 