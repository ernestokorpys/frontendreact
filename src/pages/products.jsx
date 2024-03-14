import "./styles/product-style.css";
import { useState, useEffect } from "react";
import ShowShopCar from "../components/shopcar.jsx"

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
  console.log(products)
  const handleShopCar = async (productID, productName) => {
    try {
        const response = await fetch(`${import.meta.env.VITE_REACT_APP_API_URL}/api/addshopcar`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ productID }),
            credentials: 'include'
        });
        console.log(JSON.stringify({ productID }));
        if (response.ok) {
            console.log(productName + ": " + "Item agregado al carrito");
        } else {
            const responseData = await response.json();
            if (responseData.error) {
                console.error(responseData.error);
            } else {
                console.error("Error desconocido al añadir producto");
            }
        }
    } catch (error) {
        console.error("Error:", error);
    }
};

  return (
    <div>
      < ShowShopCar/>
      <h1>Products</h1>
      <div  className="product-list">
        {products.map((product) => (
          <article key={product.ID} className="product">
            <img src={product.Picture} alt={product.ProductName} className="product-image"/>
            <h2 className="product-title">{product.ProductName}</h2>
            <p className="product-price">Cost: {product.Cost}</p>
            <button onClick={() => handleShopCar(product.ID, product.ProductName)}>Add to cart</button>
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
