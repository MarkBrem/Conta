import ContactForm from '../ContactForm/ContactForm';
import ContactList from '../ContactList/ContactList';
import Filter from '../Filter/Filter';

export const App = () => {
  return (
    <div>
      <h1>Книга контактів</h1>
      <ContactForm />
      <h2>Контакти</h2>
      <Filter />
      <ContactList />
    </div>
  );
};
