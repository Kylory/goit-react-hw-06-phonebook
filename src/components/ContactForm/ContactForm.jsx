import { useState } from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { addContact } from '../redux/actions';
// import { addContact } from '../redux/actions';
import styles from './ContactForm.module.css';

// const ContactForm = ({ contacts, addContact }) => {
export default function ContactForm() {
  const [stateName, setStateName] = useState('');
  const [stateNumber, setStateNumber] = useState('');

  const contacts = useSelector(state => state.contacts);
  const dispatch = useDispatch();
  // const addContact = () =>
  //   dispatch(addContact({ name: stateName, number: stateNumber }));

  const handleChange = e => {
    const { name, value } = e.target;
    switch (name) {
      case 'name':
        setStateName(value);
        break;

      case 'number':
        setStateNumber(value);
        break;

      default:
        break;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();

    if (contacts && contacts.find(contact => contact.name === stateName)) {
      return alert(stateName + ' is already in contacts');
    } else if (!stateName) {
      return alert('Type some name');
    } else if (!stateNumber) {
      return alert('Type some number');
    }

    dispatch(addContact({ name: stateName, number: stateNumber }));
    // addContact()
    reset();
  };

  const reset = () => {
    setStateName('');
    setStateNumber('');
  };

  return (
    <form className={styles.contactForm} onSubmit={handleSubmit}>
      <label>
        Name
        <input
          name="name"
          type="text"
          value={stateName}
          onChange={handleChange}
        />
      </label>

      <label>
        Number
        <input
          name="number"
          type="text"
          value={stateNumber}
          onChange={handleChange}
        />
      </label>

      <button type="submit">Add contact</button>
    </form>
  );
}

// const mapStateToProps = state => ({
//   contacts: state.contacts,
// });

// const mapDispatchToProps = dispatch => ({
//   addContact: contact => dispatch(addContact(contact)),
// });

ContactForm.propTypes = {
  contacts: PropTypes.array.isRequired,
  addContact: PropTypes.func.isRequired,
};

// export default connect(mapStateToProps, mapDispatchToProps)(ContactForm);
