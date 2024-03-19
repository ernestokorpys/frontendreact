import "./styles/product-style.css";
import { useState, useEffect } from "react";
import { GetProducts, NotLogIn } from "../components/getproducts.jsx";
import { FilterForm } from "../components/filters.jsx";

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

  return (
    <>
      {isLoggedIn ? (
        <>
          <div className="products-container">
            <FilterForm />
            <GetProducts />
          </div>
        </>
      ) : (
        <NotLogIn />
      )}
    </>
  );
};
export default Products;
