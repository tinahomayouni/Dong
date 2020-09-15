import React from "react";
import { Switch } from "react-router-dom";
import Login from "./containers/Auth/login/Login";
import Register from "./containers/Auth/register/Register";
import Dashboard from "./containers/Dashboard/Dashboard";
import Home from "./containers/Home/Home";
import RouteWrapper from "./RouterWrapper";
import {
  LayoutLogin,
  LayoutRegister,
  LayoutHome,
  LayoutDashboard,
} from "./layouts/layout";

export default function Routes() {
  return (
    <Switch>
      <RouteWrapper exact path="/" component={Home} layout={LayoutHome} />
      <RouteWrapper
        exact
        path="/login"
        component={Login}
        layout={LayoutLogin}
      />
      <RouteWrapper
        exact
        path="/register"
        component={Register}
        layout={LayoutRegister}
      />
      <RouteWrapper
        exact
        path="/dashboard"
        component={Dashboard}
        layout={LayoutDashboard}
      />
    </Switch>
  );
}
