
import PropTypes from "prop-types";
import "./styles/layout-style.css";
import logo from "./images/LogoErne2.png"; 
import { Link } from "react-router-dom";


const PageSection = ({ sectionList }) => {
  // Función para transformar el nombre
  const transformName = (name) => {
    return name
      .split("-") // Divide la cadena en un array de palabras
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1)) // Capitaliza cada palabra
      .join(" "); // Une las palabras con espacios
  };

  return (
    <ul>
      {sectionList.map((name, index) => {
        const formattedName = transformName(name);
        return (
          <li key={index}>
            {" "}
            {/* key= index. Not nesesarie, index must be a unique number */}
            <Link to={`/${name}`}>{formattedName}</Link>
          </li>
        );
      })}
    </ul>
  );
};
//prop validation. To ensure that the expected props are passed to the componente
PageSection.propTypes = {
  sectionList: PropTypes.arrayOf(PropTypes.string).isRequired, // Prop validation
};

const section_list = ["home", "products", "login"];


const Layout = () => {
  return (
    <header>
      <nav className="page-header">
        <div className="logo">
           <img className="logo-style" src={logo} alt="logoErne" /> 
            <Link to={"/home"}>Clear Mind.</Link>
        </div>
        <ul>
          <PageSection sectionList={section_list} />
        </ul>
      </nav>
    </header>
  );
};
export default Layout;