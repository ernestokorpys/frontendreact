import { useState } from "react";
import { useNavigate  } from 'react-router-dom';

import "../pages/styles/product-style.css";

const FilterForm = () => {
  const navigate = useNavigate();
  const [minCost, setMinCost] = useState();
  const [maxCost, setMaxCost] = useState(); 
  const [keyword, setKeyword] = useState("");
  const handleMinCostChange = (event) => {
    const value = parseInt(event.target.value);
    setMinCost(value);
  };
  const handleMaxCostChange = (event) => {
    const value = parseInt(event.target.value);
    setMaxCost(value);
  };
  const handleKeywordChange = (event) => {
    const value = event.target.value;
    setKeyword(value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      navigate(`/search?minCost=${minCost}&maxCost=${maxCost}&keyword=${keyword}`, { replace: true });
      // Si ya estás en la página de búsqueda, recargar la página
      if (window.location.pathname === '/search') {
        window.location.reload();
      }
    } catch (error) {
      console.error("Error al filtrar productos:", error);
    }
  };

  return (
    <>
      <h1>Search Bar</h1>
      <div className="filter-container">
        <form action="submit" onSubmit={handleSubmit}>
          <div className="search-cost">
          Price
          <input
            type="number"
            placeholder="Min"
            value={minCost}
            onChange={handleMinCostChange}
          />
          <input
            type="number"
            placeholder="Max"
            value={maxCost}
            onChange={handleMaxCostChange}
          />
          </div>
          <div className="search-key">
          Product Name
          <input
            type="text"
            placeholder="Search"
            value={keyword}
            onChange={handleKeywordChange}
          />
          <button type="submit">Search</button>
          </div>
        </form>
      </div>
    </>
  );
};

export { FilterForm };

