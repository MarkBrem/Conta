import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { setName, setPhone, addContact } from '../../redux/contactsSlice';
import PropTypes from 'prop-types';
import { addContact, setName, setPhone } from 'components/contactsSlice';

export const ContactForm = () => {
  const { name, phone, items } = useSelector(state => state.contacts);
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    if (items.find(contact => contact.name === name)) {
      alert(`${name} вже є у списку контактів`);
      return;
    }
    dispatch(addContact());
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={name}
        onChange={e => dispatch(setName(e.target.value))}
        placeholder="Ім'я"
        required
      />
      <input
        type="tel"
        value={phone}
        onChange={e => dispatch(setPhone(e.target.value))}
        placeholder="Телефон"
        required
      />
      <button type="submit">Додати</button>
    </form>
  );
};

ContactForm.propTypes = {
  onSubmit: PropTypes.func,
};
