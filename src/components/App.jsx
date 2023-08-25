import { Box, Title, Subtitle } from './App.styled';
import Form from './Form/Form';
import Contacts from './Contacts/Contacts';
import Filter from './Filter/Filter';

const App = () => {
  return (
    <Box>
      <Title>Phonebook</Title>
      <Form />

      <Subtitle>Contacts</Subtitle>
      <Filter></Filter>
      <Contacts />
    </Box>
  );
};

export default App;
