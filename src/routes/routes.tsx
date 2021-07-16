import React from "react";
import { Switch, Route } from "react-router-dom";
import About from "../pages/About";
import Expenses from "../pages/Expenses";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Proposals from "../pages/Proposals";
import Register from "../pages/Register";

function AppRoutes() {
  return (
    <>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/expenses" component={Expenses} />
        <Route exact path="/proposals" component={Proposals} />
        <Route exact path="/about" component={About} />
      </Switch>
    </>
  );
}

export default AppRoutes;
