import React from 'react';
import { NavLink } from 'react-router-dom';
import s from '../AuthNav/AuthNav.module.css';

export default function AuthNav() {
  return (
    <div>
      <NavLink to="/register" exact className={s.nav}>
        Registration
      </NavLink>
      <NavLink to="/login" exact className={s.nav}>
        Log in
      </NavLink>
    </div>
  );
}
