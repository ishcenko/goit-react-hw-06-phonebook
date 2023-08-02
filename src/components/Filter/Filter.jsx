import { useDispatch } from 'react-redux';
import { setFilter } from 'redux/filterSlice';
import { Label } from './Filter.styled';

function Filter() {
  const dispatch = useDispatch();
  const handlerChangeFilter = event => {
    dispatch(setFilter(event.target.value.tiLowerCase().trim()));
  };
  return (
    <>
      <Label htmlFor="filter">Find contacts by name:</Label>;
      <input
        id="filter"
        type="text"
        name="filter"
        onChange={handlerChangeFilter}
      />
    </>
  );
}

export default Filter;
