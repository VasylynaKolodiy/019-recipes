import React from 'react';
import ReactDOM from 'react-dom/client';
import {createStore, applyMiddleware} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import {Provider} from "react-redux";
import createSagaMiddleware from "redux-saga";
//_____________________________________________________________________________________
import './index.scss';
import App from './App';
import {reducers} from "./redux/reducers";
import {sagas} from "./redux/sagas";
//_____________________________________________________________________________________

const saga = createSagaMiddleware();

export const store = createStore(reducers, composeWithDevTools(
  applyMiddleware(saga)
));

saga.run(sagas);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);


