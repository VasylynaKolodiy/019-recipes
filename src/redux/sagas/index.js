import {all} from "redux-saga/effects";
//_____________________________________________________________________________________
import recipes from "./recipes";
//_____________________________________________________________________________________

export function* sagas() {
  yield all([
    recipes,
  ])
}
