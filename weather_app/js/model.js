import {API_URL, KEY} from "./config.js";
import {AJAX} from "./helper.js";
import searchView from "./views/searchView.js";

export const state = {
  search: {
    results: []
  }
};

export const loadCitiesResults = async function (query) {
  try {
    const data = await AJAX(`${API_URL}${query}&appid=${KEY}`);
    console.log(data);

    const icon = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`

    state.search.results.push({
      name: data.name,
      description: data.weather[0].description.toUpperCase(),
      country: data.sys.country,
      temp: Math.round(data.main.temp) - 273,
      icon: icon,
    });

    console.log(state.search.results);
  } catch (e) {
    searchView._generateMarkup();
    throw new Error();
  }
}

