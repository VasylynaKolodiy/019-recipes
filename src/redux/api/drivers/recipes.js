import axios from "axios";
//_____________________________________________________________________________________
import {URL} from "../../../helpers/constants"
//_____________________________________________________________________________________

export const recipes = {
  getRecipesCategories: () => {
    return axios.get(`${URL}categories.php`);
  },

  filterRecipesByCategories: (category) => {
    return axios.get(`${URL}filter.php?c=${category}`);
  },
};

