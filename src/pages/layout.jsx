import "./styles/layout-style.css";
import logo from "./images/LogoErne2.png";
import { Link } from "react-router-dom";


const Layout = () => {
  const handleLogout = async () => {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_REACT_APP_API_URL}/api/logout`,
        {
          method: "POST",
          credentials: "include",
        }
      );

      if (response.ok) {
        localStorage.setItem("isLogin", false);
        console.log(localStorage.getItem("isLogin"));
        window.location.reload(); // Recargar la página
        console.log("Log out Successfully!!!");
      } else {
        // Manejar errores de logout
      }
    } catch (error) {
      // Manejar errores de red
    }
  };

  return (
    <header>
      <nav className="page-header">
        <div className="logo">
          <img className="logo-style" src={logo} alt="logoErne" />
          <Link to={"/home"}>Clear Mind.</Link>
        </div>
        <ul>
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to="/products">Products</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
          <button onClick={handleLogout}>Logout</button>
          </li>
        </ul>
      </nav>
    </header>
  );
};
export default Layout;
