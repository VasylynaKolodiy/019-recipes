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

function* getLatestRecipes() {
  try {
    const res = yield call(Api.recipes.getLatestRecipes);
    yield put({type: recipesActions.GET_LATEST_RECIPES_SUCCESS, payload: res.data.meals});
  } catch (err) {
    yield put({type: recipesActions.GET_LATEST_RECIPES_FAIL, payload: {error: err.message}});
  }
}

function* getMeal(action) {
  try {
    const res = yield call(Api.recipes.getMeal, action.payload);
    yield put({type: recipesActions.GET_MEAL_SUCCESS, payload: res.data.meals[0]});
  } catch (err) {
    yield put({type: recipesActions.GET_MEAL_FAIL, payload: {error: err.message}});
  }
}

function* getAlphabet(action) {
  try {
    const res = yield call(Api.recipes.getAlphabet, action.payload);
    yield put({type: recipesActions.GET_ALPHABET_SUCCESS, payload: res.data.meals});
  } catch (err) {
    yield put({type: recipesActions.GET_ALPHABET_FAIL, payload: {error: err.message}});
  }
}

function* getAllIngredients() {
  try {
    const res = yield call(Api.recipes.getAllIngredients);
    yield put({type: recipesActions.GET_ALL_INGREDIENTS_SUCCESS, payload: res.data.meals});
  } catch (err) {
    yield put({type: recipesActions.GET_ALL_INGREDIENTS_FAIL, payload: {error: err.message}});
  }
}

function* searchByName(action) {
  try {
    const res = yield call(Api.recipes.searchByName, action.payload);
    yield put({type: recipesActions.SEARCH_MEAL_BY_NAME_SUCCESS, payload: res.data.meals});
  } catch (err) {
    yield put({type: recipesActions.SEARCH_MEAL_BY_NAME_FAIL, payload: {error: err.message}});
  }
}

function* filterByIngredient(action) {
  try {
    const res = yield call(Api.recipes.filterByIngredient, action.payload);
    yield put({type: recipesActions.FILTER_RECIPES_BY_INGREDIENT_SUCCESS, payload: res.data.meals});
  } catch (err) {
    yield put({type: recipesActions.FILTER_RECIPES_BY_INGREDIENT_FAIL, payload: {error: err.message}});
  }
}

function* getRecipesAreas() {
  try {
    const res = yield call(Api.recipes.getRecipesAreas);
    yield put({type: recipesActions.GET_RECIPES_AREAS_SUCCESS, payload: res.data.meals});
  } catch (err) {
    yield put({type: recipesActions.GET_RECIPES_AREAS_FAIL, payload: {error: err.message}});
  }
}

export default all([
  takeLatest(recipesActions.GET_RECIPES_CATEGORIES_REQUEST, getRecipesCategories),
  takeLatest(recipesActions.FILTER_RECIPES_BY_CATEGORIES_REQUEST, filterRecipesByCategories),
  takeLatest(recipesActions.GET_LATEST_RECIPES_REQUEST, getLatestRecipes),
  takeLatest(recipesActions.GET_MEAL_REQUEST, getMeal),
  takeLatest(recipesActions.GET_ALPHABET_REQUEST, getAlphabet),
  takeLatest(recipesActions.GET_ALL_INGREDIENTS_REQUEST, getAllIngredients),
  takeLatest(recipesActions.SEARCH_MEAL_BY_NAME_REQUEST, searchByName),
  takeLatest(recipesActions.FILTER_RECIPES_BY_INGREDIENT_REQUEST, filterByIngredient),
  takeLatest(recipesActions.GET_RECIPES_AREAS_REQUEST, getRecipesAreas),
])
