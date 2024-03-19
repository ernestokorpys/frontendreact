import "../pages/styles/product-style.css";
// import {SearchFilterSection} from  '../components/filters';
// import AddToShopCar from "../fetchdata/addtoshopcar";
import FetchFilterProducts from "../fetchdata/filterproducts";
import { useEffect, useState } from "react";
import AddToShopCar from "../fetchdata/addtoshopcar";
import PaginationBar from "../components/pagebar.jsx";

const SearchResult = () => {
  const [products, setProducts] = useState([]);
  const [loadingTimeout, setLoadingTimeout] = useState(false);
  const [totalPages, setTotalPages] = useState();

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoadingTimeout(true);
    }, 5000); // 10 segundos

    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const products = await FetchFilterProducts();
        setProducts(products);
        setTotalPages(products.meta.last_page);
      } catch (error) {
        console.error("Error al obtener productos:", error);
      }
    };
    fetchData();
  }, []);

  if (!products.data || products.data === null) {
    if (loadingTimeout) {
      return (
        <div className="loading-container">
          <h1>Resultados no encontrados</h1>
        </div>
      );
    } else {
      return (
        <div className="loading-container">
          <div className="loading-spinner"></div>
          <h1>Cargando página</h1>
        </div>
      );
    }
  } else if (products.data.length !== 0) {
    return (
      <>
        <h1>Products</h1>
        <div className="product-list">
          {products.data.map((product) => (
            <article key={product.ID} className="product">
              <img
                src={product.Picture}
                alt={product.ProductName}
                className="product-image"
              />
              <h2 className="product-title">{product.ProductName}</h2>
              <p className="product-price">Cost: {product.Cost}</p>
              <button
                onClick={() => AddToShopCar(product.ID, product.ProductName)}
              >
                Add to cart
              </button>
            </article>
          ))}
        </div>
        <PaginationBar totalPages={totalPages} />

      </>
    );
  } else {
    return null; // O cualquier otro comportamiento deseado si no hay datos pero no queremos mostrar un mensaje
  }
};

export default SearchResult;
