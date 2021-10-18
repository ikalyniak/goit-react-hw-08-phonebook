import { useDispatch } from 'react-redux';
import { useEffect } from 'react';

import operations from '../redux/contacts/operations';

import Container from '../components/Container/Container';
import Form from '../components/Form/Form';
import Filter from '../components/Filter/Filter';
import Contacts from '../components/Contacts/Contacts';

export default function ContactsView() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(operations.fetchContacts());
  }, [dispatch]);

  return (
    <div className="">
      <Container>
        <h1>Phonebook</h1>
        <Form />
        <h2>Contacts</h2>
        <Filter />
        <Contacts />
      </Container>
    </div>
  );
}
