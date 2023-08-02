import { nanoid } from '@reduxjs/toolkit';
import { useDispatch, useSelector } from 'react-redux';
import { Form } from './ContactForm.styled';

import { addContact } from '../../redux/contactSlice';
import { getContacts } from 'redux/selectors';

function ContactForm() {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);
  const handlerSubmit = event => {
    event.preventDefault();

    const name = event.target.elements.number.value;
    if (contacts.find(el => el.name === name)) {
      alert(name + 'already exists in the phone book');
      event.target.reset();
      return;
    }
    const number = event.target.elements.number.value;
    const newContact = {
      id: nanoid(),
      name,
      number,
    };
    dispatch(addContact(newContact));
    event.target.reset();
  };
  return (
    <Form onSubmit={handlerSubmit}>
      <label htmlFor="name">Name</label>
      <input
        id="name"
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
      />

      <label htmlFor="tel">Number</label>
      <input
        id="tel"
        type="tel"
        name="number"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
      />
      <br />
      <button type="submit">Add contact</button>
    </Form>
  );
}

export default ContactForm;
