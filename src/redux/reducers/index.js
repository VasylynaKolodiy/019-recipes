import { combineReducers } from "redux";
//_____________________________________________________________________________________
import recipes from "./recipes";
//_____________________________________________________________________________________

const reducers = combineReducers({
  recipes: recipes,
});

export { reducers };



