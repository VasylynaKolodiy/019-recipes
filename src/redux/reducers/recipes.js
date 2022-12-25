import {
  GET_RECIPES_CATEGORIES_REQUEST,
  GET_RECIPES_CATEGORIES_SUCCESS,
  GET_RECIPES_CATEGORIES_FAIL,
  FILTER_RECIPES_BY_CATEGORIES_REQUEST,
  FILTER_RECIPES_BY_CATEGORIES_SUCCESS,
  FILTER_RECIPES_BY_CATEGORIES_FAIL,
} from "../actions/recipes";
//_____________________________________________________________________________________

const initialState = {
  loading: false,
  recipesCategories: [],
  recipes: [],
};

export default function recipes(state = initialState, action) {
  switch (action.type) {

    case GET_RECIPES_CATEGORIES_REQUEST:
      return {
        ...state,
        loading: true
      };

    case GET_RECIPES_CATEGORIES_SUCCESS:
      return {
        ...state,
        recipesCategories: action.payload,
        loading: false,
      };

    case GET_RECIPES_CATEGORIES_FAIL:
      return {
        ...state,
        loading: false,
      };

    case FILTER_RECIPES_BY_CATEGORIES_REQUEST:
      return {
        ...state,
        loading: true
      };

    case FILTER_RECIPES_BY_CATEGORIES_SUCCESS:
      return {
        ...state,
        recipes: action.payload,
        loading: false,
      };

    case FILTER_RECIPES_BY_CATEGORIES_FAIL:
      return {
        ...state,
        loading: false,
      };

    default:
      return state;
  }
}
