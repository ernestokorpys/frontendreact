import { useState, useEffect } from "react";

const ShopCar = () => {
  const [products, setProducts] = useState([]);
  const [show, setShow] = useState(false);

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

  const handleRemove = async (index) => {
    try {
      // Realizar la solicitud DELETE a la API para eliminar el elemento del carrito
      const response = await fetch(`${import.meta.env.VITE_REACT_APP_API_URL}/api/removefromcar/${index}`, {
        method: "DELETE",
        credentials: "include",
      });
  
      if (response.ok) {
        console.log("Elemento eliminado del carrito exitosamente.");

        setProducts(prevProducts => prevProducts.filter((product, i) => i !== index));
      } else {
        // Si hay algún error en la respuesta, manejarlo apropiadamente
        console.error("Error al eliminar elemento del carrito.");
      }
    } catch (error) {
      // Si hay algún error en la solicitud, manejarlo apropiadamente
      console.error("Error:", error);
    }
  };

  const toggleShow = () => {
    setShow(prevShow => !prevShow);
    
  };

  return (
    <>
      <h1>Shopcar</h1>
      <button onClick={toggleShow}>{show ? "Hide" : "Show"}</button>
      {show && (
        <>
          {products.map((product, index) => (
            <div key={index}>
              <p>{product.ProductName}</p>
              <button onClick={() => handleRemove(index)}>Remove</button>
            </div>
          ))}
        </>
      )}
    </>
  );
};

export default ShopCar;
