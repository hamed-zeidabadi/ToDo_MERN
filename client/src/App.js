import React from "react";
import "./Scss/App.scss";
import Login from "./Pages/Login";
import Todo from "./Pages/ToDo";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

const App = () => {
  return (
    <>
      <Router>
        <Switch>
          {/* <Route path="/" component={Login} /> */}
          <Route path="/" component={Todo} />
          <Redirect path="/" to={Todo} />
        </Switch>
      </Router>
    </>
  );
};

export default App;
