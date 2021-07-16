import { categories } from '../Container/ BooksForm';

const CategoryFilter = () => (
  <select
    // onChange={handleChange}
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

export default CategoryFilter;
