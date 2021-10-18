import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Navigation.module.css';

export default function Navigation() {
  return (
    <nav className={styles.nav}>
      <NavLink
        className={styles.link}
        activeClassName={styles.activeLink}
        exact
        to="/"
      >
        HOME
      </NavLink>
      <NavLink
        className={styles.link}
        activeClassName={styles.activeLink}
        exact
        to="/contacts"
      >
        PHONEBOOK
      </NavLink>
    </nav>
  );
}
