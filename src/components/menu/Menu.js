import React from "react";
import { Link } from "react-router-dom";
import "./menu.scss";

export default function Menu() {
  return (
    <div id="menuWrapper">
      <ul id="mainMenu">
        <li>
          <Link to="/">Home</Link>
        </li>
      </ul>
      <ul id="auth">
        <li>
          <Link to="/login">login</Link>
        </li>
        <li>
          <Link to="/register">register</Link>
        </li>
      </ul>
    </div>
  );
}
