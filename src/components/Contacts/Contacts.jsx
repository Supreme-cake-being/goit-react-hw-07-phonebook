import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';

import { List } from './Contacts.styled';
import { Contact } from '../Contact/Contact';
import Loader from 'components/Loader/Loader';
import { fetchContacts, deleteContact } from 'redux/operations';
import {
  selectContacts,
  selectError,
  selectFilter,
  selectIsLoading,
} from 'redux/selectors';

const Contacts = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const error = useSelector(selectError);
  const isLoading = useSelector(selectIsLoading);
  const filter = useSelector(selectFilter);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const filteredContacts = contacts.filter(({ name }) =>
    name.toLowerCase().includes(filter)
  );

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <List>
          {filteredContacts.length !== 0 ? (
            filteredContacts.map(({ id, name, number }) => (
              <Contact
                key={id}
                name={name}
                number={number}
                onClick={() => dispatch(deleteContact(id))}
              ></Contact>
            ))
          ) : error ? (
            <p>{error}</p>
          ) : (
            <p>There are no contacts :(</p>
          )}
        </List>
      )}
    </>
  );
};

export default Contacts;
