import { createAction } from '@reduxjs/toolkit';
import shortid from 'shortid';

const addContact = createAction('form/addContact', ({ name, number }) => ({
  payload: {
    id: shortid.generate(),
    name: name,
    number: number,
  },
}));

const deleteContact = createAction('form/deleteContact');

const filterContacts = createAction('contactsList/filterContacts');

export { addContact, deleteContact, filterContacts };
