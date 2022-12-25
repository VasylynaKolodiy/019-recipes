import {call, put, all, takeLatest} from "redux-saga/effects";
//_____________________________________________________________________________________
import * as recipesActions from "../actions/recipes";
import {Api} from "../api";
//_____________________________________________________________________________________

function* getRecipesCategories() {
  try {
    const res = yield call(Api.recipes.getRecipesCategories);
    yield put({type: recipesActions.GET_RECIPES_CATEGORIES_SUCCESS, payload: res.data.categories});
  } catch (err) {
    yield put({type: recipesActions.GET_RECIPES_CATEGORIES_FAIL, payload: {error: err.message}});
  }
}

function* filterRecipesByCategories(action) {
  try {
    const res = yield call(Api.recipes.filterRecipesByCategories, action.payload);
    yield put({type: recipesActions.FILTER_RECIPES_BY_CATEGORIES_SUCCESS, payload: res.data.meals});
  } catch (err) {
    yield put({type: recipesActions.FILTER_RECIPES_BY_CATEGORIES_FAIL, payload: {error: err.message}});
  }
}

export default all([
  takeLatest(recipesActions.GET_RECIPES_CATEGORIES_REQUEST, getRecipesCategories),
  takeLatest(recipesActions.FILTER_RECIPES_BY_CATEGORIES_REQUEST, filterRecipesByCategories),
])
