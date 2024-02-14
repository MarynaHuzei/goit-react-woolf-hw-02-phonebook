// import React from 'react';

// // Компонент списку контактів
// const ContactList = ({ contacts, onRemoveContact }) => (
//   <div>
//     <ul>
//       {contacts.map(contact => (
//         <li key={contact.id}>
//           {contact.name + ' : ' + contact.number}
//           {
//             // Кнопка видалення контакту
//             <button
//               type="button"
//               name="delete"
//               onClick={() => onRemoveContact(contact.id)}
//             >
//               delete
//             </button>
//           }
//         </li>
//       ))}
//     </ul>
//   </div>
// );

// export default ContactList;

// ContactList.js
import React from 'react';
import Contact from '../Contact/Contact';
import styles from './ContactList.module.css';

const ContactList = ({ contacts, onDeleteContact }) => (
  <ul className={styles.list}>
    {contacts.map(contact => (
      <Contact
        key={contact.id}
        contact={contact}
        onDeleteContact={onDeleteContact}
      />
    ))}
  </ul>
);

export default ContactList;
