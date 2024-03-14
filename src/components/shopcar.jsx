import { useState, useEffect } from "react";


const ShowShopCar = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_REACT_APP_API_URL}/api/getshopcar`, {
      method: "GET",
      credentials: "include",
    })
      .then((response) => response.json())
      .then((data) => {
        setProducts(data.data);
      })
      .catch((error) => console.error("Error fetching products:", error));
  }, []);

  return (
    <>
      <h1>Shopcar</h1>
      {products.map((product,index) => (
        <p key={index}>{product.ProductName}</p>
      ))} 
    </>
  );
};

export default ShowShopCar;
