import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { setFilter } from '../components/filterSlice';

export const Filter = () => {
  const filter = useSelector(state => state.filter);
  const dispatch = useDispatch();

  return (
    <input
      type="text"
      value={filter}
      onChange={e => dispatch(setFilter(e.target.value))}
      placeholder="Пошук контактів"
    />
  );
};

Filter.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
};
