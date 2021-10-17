import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import actions from '../../redux/actions';
import { getContactsFilter } from '../../redux/selectors';
import styles from './Filter.module.css';

export default function Filter() {
  const value = useSelector(getContactsFilter);
  const dispatch = useDispatch();
  const onChange = event => dispatch(actions.changeFilter(event.target.value));
  return (
    <label>
      Find contact by name
      <input
        name="filter"
        type="text"
        value={value}
        onChange={onChange}
        className={styles.filter}
      />
    </label>
  );
}
