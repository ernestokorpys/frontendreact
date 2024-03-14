import { useState } from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!email || !password) {
            setErrorMessage("Please fill out all fields");
            return;
        }

        const userData = {
            email,
            password
        };

        try {
            const response = await fetch(`${import.meta.env.VITE_REACT_APP_API_URL}/api/login`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(userData),
                credentials: 'include'
            });

            if (response.ok) {
                localStorage.setItem('isLogin', true);
                console.log(localStorage.getItem("isLogin"))
                alert("Successfully Login!");
            } else {
                const responseData = await response.json();
                if (responseData.error) {
                    setErrorMessage(responseData.error);
                    console.log(errorMessage)
                } else {
                    setErrorMessage("Failed to create account");
                }
            }
        } catch (error) {
            console.error("Error:", error);
            setErrorMessage("Failed to create account");
        }
    };

    return (
        <>
            <h1>Login Page</h1>
            <div className="login-page">
                <div className="form">
                    <form className="login-form" onSubmit={handleSubmit}>
                        <input type="text" placeholder="Email Address" value={email} onChange={(e) => setEmail(e.target.value)} required />
                        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                        <button type="submit">Login</button>
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
