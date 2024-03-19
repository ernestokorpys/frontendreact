import "../pages/styles/product-style.css";
import { FilterForm } from "../components/filters";

import SearchResult from "../components/searchfilter";

const FilterProducts = () => {
  return (
    <>
      <div className="products-container">
        <FilterForm />
        <SearchResult />
      </div>
    </>
  );
};

export default FilterProducts;
