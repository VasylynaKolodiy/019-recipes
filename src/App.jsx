import React from "react";
import {BrowserRouter} from "react-router-dom";
//_____________________________________________________________________________________
import './App.scss';
import AppRouter from "./routers/AppRouter/AppRouter";
//_____________________________________________________________________________________

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <AppRouter/>
      </BrowserRouter>

    </div>
  );
}

export default App;
