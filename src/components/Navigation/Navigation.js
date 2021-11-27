import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { authSelector } from '../../redux/auth/auth-selectors';
import s from '../Navigation/Navigation.module.css';

const Navigation = () => {
  const isLoggedIn = useSelector(authSelector.getIsLoggedIn);
  return (
    <nav className={s.wrapper}>
      <NavLink to="/" exact className={s.nav}>
        Home
      </NavLink>

      {isLoggedIn && (
        <NavLink to="/contacts" exact className={s.nav}>
          Contact list
        </NavLink>
      )}
    </nav>
  );
};

export default Navigation;
