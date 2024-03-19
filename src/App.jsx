
import { Route, Routes,  } from "react-router-dom";
import Layout from "./pages/layout.jsx";
import Home from "./pages/home.jsx";
import Login from "./pages/login.jsx";
import Products from "./pages/products.jsx";
import CreateAccount from "./pages/createaccount.jsx";
import FilterProducts from "./pages/searchresult.jsx";

import './App.css';

function App() {

  return (
    <>
      <Layout />
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<CreateAccount />} />
        <Route path="/search" element={<FilterProducts />} />
        <Route path="*" element={<h1>Not found</h1>} />
      </Routes>
    </>
  )
}

export default App;



