import { useSelector, useDispatch } from 'react-redux';

import { List } from './Contacts.styled';
import { Contact } from '../Contact/Contact';
import { deleteContact } from 'redux/contactsSlice';
import { getContacts, getFilter } from 'redux/selectors';

const Contacts = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);

  const filteredContacts = Object.values(contacts).filter(({ name }) =>
    name.toLowerCase().includes(filter)
  );

  return (
    <>
      <List>
        {filteredContacts.length !== 0 ? (
          filteredContacts.map(({ id, name, number }) => (
            <Contact
              key={id}
              name={name}
              number={number}
              onClick={() => dispatch(deleteContact({ id }))}
            ></Contact>
          ))
        ) : (
          <p>There are no contacts :(</p>
        )}
      </List>
    </>
  );
};

export default Contacts;
