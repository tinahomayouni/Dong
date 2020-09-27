import React from "react";
import { Route } from "react-router-dom";
import history from "./history/history";

export default function RouteWrapper({
  component: Component,
  layout: Layout,
  ...rest
}) {
  return (
    <Route 
      history={history}
      {...rest}
      render={(props) => (
        <Layout {...props}>
          <Component {...props} />
        </Layout>
      )}
    />
  );
}
