// Note: Routes component...!

import React from 'react';
// import { useSelector } from 'react-redux';
import {
  BrowserRouter as Router,
  Routes,
  Route
}
  from "react-router-dom";

// Note: Importing reuseabale components...!
import MainHome from "./components/parent/index";

const AppRoutes = () => {

  // Note: One way for maintain user session using cookies redux...!
  // let getUser = useSelector(({ users }) => { return users.authenticatedUser });
  // console.log(getUser);

  return (
    <React.Fragment>
      <Router>
        <Routes>
          <Route path="/" element={<MainHome />} />
        </Routes>
      </Router>
    </React.Fragment>
  );
}

export default AppRoutes;