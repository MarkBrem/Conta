import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { deleteContact } from '../components/contactsSlice';

const ContactList = () => {
  const contacts = useSelector(state => state.contacts);
  const filter = useSelector(state => state.filter.toLowerCase());
  const dispatch = useDispatch();

  const visibleContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter)
  );

  return (
    <ul>
      {visibleContacts.map(contact => (
        <li key={contact.id}>
          {contact.name}: {contact.phone}
          <button onClick={() => dispatch(deleteContact(contact.id))}>
            Видалити
          </button>
        </li>
      ))}
    </ul>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.array,
};
