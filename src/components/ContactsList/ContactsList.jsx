import { useSelector, useDispatch } from 'react-redux';
import { deleteContact } from '../redux/actions';
import { getContacts, getFilteredContacts } from '../redux/selectors';
import styles from './ContactsList.module.css';

export default function ContactsList() {
  const filteredContacts = useSelector(getFilteredContacts);
  const allContacts = useSelector(getContacts);
  //Пушить актуальний список контаків в LS
  window.localStorage.setItem('contacts', JSON.stringify(allContacts));

  const dispatch = useDispatch();

  return (
    <ul className={styles.ContactsList}>
      {filteredContacts.map(contact => (
        <li key={contact.id}>
          {contact.name}
          {': '}
          {contact.number}
          <button onClick={() => dispatch(deleteContact(contact.id))}>
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}
