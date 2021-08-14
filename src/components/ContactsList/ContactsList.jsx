import { useSelector, useDispatch } from 'react-redux';
import { deleteContact } from '../redux/actions';
import { getFilteredContacts } from '../redux/selectors';
// import setToLS from './getFromLS';
import styles from './ContactsList.module.css';

export default function ContactsList() {
  const contacts = useSelector(getFilteredContacts);
  //Пушить актуальний список контаків в LS
  window.localStorage.setItem('contacts', JSON.stringify(contacts));

  const dispatch = useDispatch();

  return (
    <ul className={styles.ContactsList}>
      {contacts.map(contact => (
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
