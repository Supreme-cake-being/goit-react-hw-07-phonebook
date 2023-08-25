import { Label, Input } from './Filter.styled';
import { useSelector, useDispatch } from 'react-redux';
import { filterContacts } from 'redux/filterSlice';
import { selectFilter } from 'redux/selectors';

const Filter = () => {
  const dispatch = useDispatch();

  const filter = useSelector(selectFilter) ?? '';

  const handleChange = e => {
    dispatch(filterContacts(e.target.value));
  };

  return (
    <Label>
      Find contacts by name
      <Input
        type="text"
        name="filter"
        onChange={handleChange}
        value={filter}
      ></Input>
    </Label>
  );
};

export default Filter;
