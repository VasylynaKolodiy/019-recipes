import {
  GET_RECIPES_CATEGORIES_REQUEST,
  GET_RECIPES_CATEGORIES_SUCCESS,
  GET_RECIPES_CATEGORIES_FAIL,
  FILTER_RECIPES_BY_CATEGORIES_REQUEST,
  FILTER_RECIPES_BY_CATEGORIES_SUCCESS,
  FILTER_RECIPES_BY_CATEGORIES_FAIL,
  GET_LATEST_RECIPES_REQUEST,
  GET_LATEST_RECIPES_SUCCESS,
  GET_LATEST_RECIPES_FAIL,
  GET_MEAL_REQUEST,
  GET_MEAL_SUCCESS,
  GET_MEAL_FAIL,
  GET_ALPHABET_REQUEST,
  GET_ALPHABET_SUCCESS,
  GET_ALPHABET_FAIL,
  GET_ALL_INGREDIENTS_REQUEST,
  GET_ALL_INGREDIENTS_SUCCESS,
  GET_ALL_INGREDIENTS_FAIL,
  SEARCH_MEAL_BY_NAME_REQUEST,
  SEARCH_MEAL_BY_NAME_SUCCESS,
  SEARCH_MEAL_BY_NAME_FAIL,
  FILTER_RECIPES_BY_INGREDIENT_REQUEST,
  FILTER_RECIPES_BY_INGREDIENT_SUCCESS,
  FILTER_RECIPES_BY_INGREDIENT_FAIL,
} from "../actions/recipes";
//_____________________________________________________________________________________

const initialState = {
  loading: false,
  recipesCategories: [],
  recipes: [],
  latestRecipes: [],
  meal: {},
  ingredients: [],
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

    case GET_LATEST_RECIPES_REQUEST:
      return {
        ...state,
        loading: true
      };

    case GET_LATEST_RECIPES_SUCCESS:
      return {
        ...state,
        latestRecipes: action.payload,
        loading: false,
      };

    case GET_LATEST_RECIPES_FAIL:
      return {
        ...state,
        loading: false,
      };

    case GET_MEAL_REQUEST:
      return {
        ...state,
        loading: true
      };

    case GET_MEAL_SUCCESS:
      return {
        ...state,
        meal: action.payload,
        loading: false,
      };

    case GET_MEAL_FAIL:
      return {
        ...state,
        loading: false,
      };

    case GET_ALPHABET_REQUEST:
      return {
        ...state,
        loading: true
      };

    case GET_ALPHABET_SUCCESS:
      return {
        ...state,
        recipes: action.payload,
        loading: false,
      };

    case GET_ALPHABET_FAIL:
      return {
        ...state,
        loading: false,
      };

    case  GET_ALL_INGREDIENTS_REQUEST:
      return {
        ...state,
        loading: true
      };

    case  GET_ALL_INGREDIENTS_SUCCESS:
      return {
        ...state,
        ingredients: action.payload,
        loading: false,
      };

    case  GET_ALL_INGREDIENTS_FAIL:
      return {
        ...state,
        loading: false,
      };

    case SEARCH_MEAL_BY_NAME_REQUEST:
      return {
        ...state,
        loading: true
      };

    case SEARCH_MEAL_BY_NAME_SUCCESS:
      return {
        ...state,
        recipes: action.payload,
        loading: false,
      };

    case SEARCH_MEAL_BY_NAME_FAIL:
      return {
        ...state,
        loading: false,
      };

    case FILTER_RECIPES_BY_INGREDIENT_REQUEST:
      return {
        ...state,
        loading: true
      };

    case FILTER_RECIPES_BY_INGREDIENT_SUCCESS:
      return {
        ...state,
        recipes: action.payload,
        loading: false,
      };

    case FILTER_RECIPES_BY_INGREDIENT_FAIL:
      return {
        ...state,
        loading: false,
      };


    default:
      return state;
  }
}
