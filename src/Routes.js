import React from "react";
import { Switch, Route } from "react-router-dom";
import Login from "./auth/login/Login";
import Register from "./auth/register/Register";
import Dashboard from "./containers/Dashboard";
import Home from "./containers/Home";

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/register" component={Register} />
      <Route exact path="/dashboard" component={Dashboard} />
    </Switch>
  );
}
