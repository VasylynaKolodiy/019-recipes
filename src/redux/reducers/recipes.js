import {
  GET_RECIPES_CATEGORIES_REQUEST,
  GET_RECIPES_CATEGORIES_SUCCESS,
  GET_RECIPES_CATEGORIES_FAIL,
} from "../actions/recipes";
//_____________________________________________________________________________________

const initialState = {
  loading: false,
  recipesCategories: [],
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

    default:
      return state;
  }
}
