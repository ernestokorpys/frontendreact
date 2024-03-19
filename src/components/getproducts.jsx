import "../pages/styles/product-style.css";
import FetchProducts from "../fetchdata/allproducts";
import AddToShopCar from "../fetchdata/addtoshopcar";
import { useEffect, useState } from "react";
import PaginationBar from "../components/pagebar.jsx";
//import ShopCar from "./shopcar.jsx";

const GetProducts = () => {
  const [products, setProducts] = useState([]);
  const [totalPages, setTotalPages] = useState();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const products = await FetchProducts();
        setProducts(products);
        setTotalPages(products.meta.last_page);
      } catch (error) {
        console.error("Error al obtener productos:", error);
      }
    };
    fetchData();
  }, []);
  console.log("Productos: ", products);
  console.log("Productos: ", totalPages);

  if (!products.data || products.data === null) {
    return (
      <div className="loading-container">
        <div className="loading-spinner"></div>
        <h1>Cargando página</h1>
      </div>
    );
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
const NotLogIn = () => {
  return (
    <>
      <h1>productos no disponibles Por favor logueese</h1>
    </>
  );
};
export { GetProducts, NotLogIn };
