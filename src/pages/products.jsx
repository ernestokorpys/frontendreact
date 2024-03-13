import "./styles/product-style.css";
import { useState, useEffect } from "react";

const GetProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const page = parseInt(urlParams.get("page")) || 1;


    fetch(
      `${import.meta.env.VITE_REACT_APP_API_URL}/api/products?page=${page}`,
      {
        method: "GET",
        credentials: "include",
      }
    )
      .then((response) => response.json())
      .then((data) => {
        setProducts(data.data);
      })
      .catch((error) => console.error("Error fetching products:", error));
  }, []);

  return (
    <div>
      <h1>Products</h1>
      <div  className="product-list">
        {products.map((product) => (
          <article key={product.ID} className="product">
            <img src={product.Picture} alt={product.ProductName} className="product-image"/>
            <h2 className="product-title">{product.ProductName}</h2>
            <p className="product-price">Cost: {product.Cost}</p>
          </article>
        ))}
      </div>
    </div>
  );
};

const NotLogIn = () => {
  return (
    <>
      <h1>productos no disponibles Por favor logueese</h1>
    </>
  );
};

const Products = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const isLogin = localStorage.getItem("isLogin");
    console.log(typeof isLogin);
    if (isLogin === "true") {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
      console.log("not true");
    }
    console.log(isLoggedIn);
    //console.log(Boolean(isLogin));
  }, [isLoggedIn]); // Ahora useEffect se ejecutará cada vez que isLoggedIn cambie

  return <>{isLoggedIn ? <GetProducts /> : <NotLogIn />}</>;
};

export default Products;
