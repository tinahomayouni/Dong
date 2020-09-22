import React from 'react';
import Header from '../containers/Header/Header';
import './layout.scss';

// import Login from "../containers/Auth/login/Login";
// import Register from "../containers/Auth/register/Register";
// import Dashboard from "../containers/Dashboard/Dashboard";
// import Home from "../containers/Home/Home";

// const LayoutHome = ({ children }) => <Home />;

// const LayoutLogin = ({ children }) => <Login />;

// const LayoutRegister = ({ children }) => <Register />;

// const LayoutDashboard = ({ children }) => <Dashboard />;

// export { LayoutHome, LayoutLogin, LayoutRegister, LayoutDashboard };

function Layout(props) {
  return (
    <>
      <div className='header'>
        <Header />
      </div>
      <div className='sideBar'></div>
      <div className='content'>{props.children}</div>
    </>
  );
}

export default Layout;
