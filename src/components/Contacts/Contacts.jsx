import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

// import Spinner from '../Loader/Loader';
import operations from '../../redux/contacts/operations';
import {
  getFilteredContacts,
  // getLoadingStatus,
} from '../../redux/contacts/selectors';
import styles from './Contacts.module.css';

export default function Contacts() {
  const contacts = useSelector(getFilteredContacts);
  // const loading = useSelector(getLoadingStatus);
  const dispatch = useDispatch();
  useEffect(() => dispatch(operations.fetchContacts()), [dispatch]);

  const onDelete = id => {
    dispatch(operations.deleteContact(id));
  };

  if (contacts) {
    // if (loading) {
    //   return <Spinner />;
    // }
    return (
      <ul className={styles.contacts}>
        {contacts.map(contact => (
          <li key={contact.id}>
            <p>
              {contact.name}:{contact.number}
            </p>
            <button type="button" onClick={() => onDelete(contact.id)}>
              DELETE
            </button>
          </li>
        ))}
      </ul>
    );
  }
}
