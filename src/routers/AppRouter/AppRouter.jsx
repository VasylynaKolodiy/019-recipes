import React from 'react';
import {Route, Routes} from "react-router-dom";
//_____________________________________________________________________________________
import {privateRoutes} from "../rotes"
//_____________________________________________________________________________________

const AppRouter = () => {
  return (
    <Routes>
      {privateRoutes.map((route, i) =>
        <Route key={i}
               path={route.path}
               element={route.component}
               exact={route.exact}
        />
      )}
    </Routes>
  )
};

export default AppRouter;