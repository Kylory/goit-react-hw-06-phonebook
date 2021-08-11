import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

const initialState = {
  contacts: JSON.parse(window.localStorage.getItem('contacts')) ?? [],
  filter: '',
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case 'form/addContact':
      return {
        ...state,
        contacts: [...state.contacts, payload],
      };

    case 'form/deleteContact':
      const filteredContacts = state.contacts.filter(
        contact => contact.id !== payload,
      );
      return { ...state, contacts: filteredContacts };

    case 'form/filterContacts':
      return {
        ...state,
        filter: payload,
      };

    default:
      return state;
  }
};

const store = createStore(reducer, composeWithDevTools());

export default store;
