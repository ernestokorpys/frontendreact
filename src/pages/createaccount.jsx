import { useState } from "react";
import "./styles/login-style.css";
import { Link } from "react-router-dom";


const CreateAccount = () => {
    const [userName, setUserName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      const userData = {
        userName,
        email,
        password
      };
  
      try {
        const response = await fetch("https://shopbackend-production-4e8c.up.railway.app/api/register", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(userData)
        });
  
        if (response.ok) {
          alert("Account created successfully!");
        } else {
          // handle error response
          alert("Failed to create account");
        }
      } catch (error) {
        console.error("Error:", error);
        alert("Failed to create account");
      }
    };
  
    return (
      <>
        <h1>Create Account Page</h1>
        <div className="login-page">
          <div className="form">
            <form onSubmit={handleSubmit}>
              <input type="text" placeholder="Name" value={userName} onChange={(e) => setUserName(e.target.value)} />
              <input type="email" placeholder="Email Address" value={email} onChange={(e) => setEmail(e.target.value)} />
              <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
              <button type="submit">Create</button>
              <p className="message">
                Already registered? <Link to="/login">Sign in</Link>
              </p>
            </form>
          </div>
        </div>
      </>
    );
  };
  
  export default CreateAccount;

