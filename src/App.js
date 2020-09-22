import React from 'react';
import Routes from './Routes';
import store from './store';
import Layout from './layouts/layout';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <React.StrictMode>
      <Provider store={store}>
        <Router>
          <Layout>
            <Routes />
          </Layout>
        </Router>
      </Provider>
    </React.StrictMode>
  );
}

export default App;
