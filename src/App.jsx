import React from "react";
import {BrowserRouter} from "react-router-dom";
//_____________________________________________________________________________________
import './App.scss';
import AppRouter from "./routers/AppRouter/AppRouter";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
//_____________________________________________________________________________________

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header/>
        <AppRouter/>
        <Footer/>
      </BrowserRouter>

    </div>
  );
}

export default App;
