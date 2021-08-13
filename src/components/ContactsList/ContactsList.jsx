import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { deleteContact } from '../redux/actions';
import styles from './ContactsList.module.css';

const ContactsList = ({ contacts, deleteContact }) => {
  return (
    <ul className={styles.ContactsList}>
      {contacts.map(contact => (
        <li key={contact.id}>
          {contact.name}
          {': '}
          {contact.number}
          <button onClick={() => deleteContact(contact.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

const mapStateToProps = ({ contacts, filter }) => {
  //Пушить актуальний список контаків в LS
  window.localStorage.setItem('contacts', JSON.stringify(contacts));

  if (contacts && filter) {
    const normalizedFilter = filter.toLowerCase();
    return {
      contacts: contacts.filter(contact =>
        contact.name.toLowerCase().includes(normalizedFilter),
      ),
    };
  }
  return { contacts: contacts };
};

const mapDispatchToProps = dispatch => {
  return {
    deleteContact: contact => dispatch(deleteContact(contact)),
  };
};

ContactsList.propTypes = {
  contacts: PropTypes.array.isRequired,
  deleteContact: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactsList);
