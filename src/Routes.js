import React from "react";
import { Switch, Route } from "react-router-dom";
import Login from "./containers/auth/login/Login";
import Register from "./containers/auth/register/Register";
import Dashboard from "./containers/Dashboard/Dashboard";
import Home from "./containers/Home/Home";

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
