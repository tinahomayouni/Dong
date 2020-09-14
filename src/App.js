import React from "react";
import Routes from "./Routes";
import store from "./store";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  return (
    <React.StrictMode>
      <Provider store={store}>
        <Router>
          <Routes />
        </Router>
      </Provider>
    </React.StrictMode>
  );
}

export default App;
