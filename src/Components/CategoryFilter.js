import PropTypes from 'prop-types';
import { categories } from '../Container/ BooksForm';

const CategoryFilter = ({ handleFilterChange }) => (
  <select
    onChange={handleFilterChange}
    id="bookCategoryFilter"
    className="form-select"
    aria-label="Default select example"
  >
    <option defaultValue>All</option>
    {categories.map((category) => (
      <option value={category} key={category}>
        {category}
      </option>
    ))}
  </select>
);

CategoryFilter.propTypes = {
  handleFilterChange: PropTypes.func.isRequired,
};

export default CategoryFilter;
