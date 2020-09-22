import React from 'react';
import { NavLink } from 'react-router-dom';
import './menu.scss';

export default function Menu() {
  return (
    <div id='menuWrapper'>
      <ul id='mainMenu'>
        <li>
          <NavLink
            to='/'
            exact
            activeStyle={{
              fontWeight: 'bold',
              color: 'red'
            }}
          >
            {' '}
            Home
          </NavLink>
        </li>
      </ul>
      <ul id='auth'>
        <li>
          <NavLink
            to='/login'
            activeStyle={{
              fontWeight: 'bold',
              color: 'red'
            }}
          >
            login
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/register'
            activeStyle={{
              fontWeight: 'bold',
              color: 'red'
            }}
          >
            register
          </NavLink>
        </li>
      </ul>
    </div>
  );
}
