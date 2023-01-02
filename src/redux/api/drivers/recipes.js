import axios from "axios";
//_____________________________________________________________________________________
import {URL, URL_KEY} from "../../../helpers/constants"
//_____________________________________________________________________________________

export const recipes = {
  getRecipesCategories: () => {
    return axios.get(`${URL}categories.php`);
  },

  filterRecipesByCategories: (category) => {
    return axios.get(`${URL}filter.php?c=${category}`);
  },

  getLatestRecipes: () => {
    return axios.get(`${URL_KEY}latest.php`);
  },

  getMeal: (id) => {
    return axios.get(`${URL}lookup.php?i=${id}`);
  },
};

