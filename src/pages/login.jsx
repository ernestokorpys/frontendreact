import "./styles/login-style.css";
import { Link } from "react-router-dom";
const Login = () => {
  return (
    <>
      <h1>Login Page2</h1>
      <div className="login-page">
        <div className="form">
          <form className="login-form">
            <input type="text" placeholder="username" />
            <input type="password" placeholder="password" />
            <button>login</button>
            <p className="message">
              Not registered? <Link to="/register">Create an account</Link>
            </p>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
