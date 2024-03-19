

const AddToShopCar = async (productID, productName) => {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_REACT_APP_API_URL}/api/addshopcar`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ productID }),
          credentials: "include",
        }
      );
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

  export default AddToShopCar