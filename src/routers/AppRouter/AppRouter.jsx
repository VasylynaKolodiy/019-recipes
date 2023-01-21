import React, {useEffect} from 'react';
import {Route, Routes, useLocation} from "react-router-dom";
//_____________________________________________________________________________________
import {privateRoutes} from "../rotes"
//_____________________________________________________________________________________

const AppRouter = () => {

  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

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