import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import authSelectors from '../../redux/authorization/auth-selectors';
import authOperations from '../../redux/authorization/auth-operations';
import styles from './UserMenu.module.css';

export default function UserMenu() {
  const dispatch = useDispatch();
  const name = useSelector(authSelectors.getUserName);

  return (
    <div className={styles.box}>
      <span className={styles.text}>{`Hello, ${name}`}</span>
      <button
        className={styles.button}
        type="button"
        onClick={() => dispatch(authOperations.logOut())}
      >
        Log out
      </button>
    </div>
  );
}
