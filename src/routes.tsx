import React from "react";
import { Switch, Route } from "react-router-dom";
import Register from "./pages/Register";

function AppRoutes() {
  return (
    <>
      <Switch>
        <Route exact path="/" component={Register} />
        <Route exact path="/home" component={Register} />
        <Route exact path="/login" component={Register} />
        <Route exact path="/register" component={Register} />
      </Switch>
    </>
  );
}

export default AppRoutes;
