import ContactForm from '../ContactForm/ContactForm';
import Filter from '../Filter/Filter';
import ContactList from '../Contacts/ContactList';
import s from '../ContactForm/ContactForm.module.css';

const ContactsView = () => {
  return (
    <div className={s.container}>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      <ContactList />
    </div>
  );
};

export default ContactsView;
