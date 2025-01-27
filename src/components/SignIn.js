import React, { useState } from "react";
import { Link } from "react-router-dom"; 
import { post } from "../api";
import "../styles/_auth.scss";

const SignIn = ({ setAuthenticated, setUsername }) => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await post("/api/auth/local", {
        identifier: formData.email,
        password: formData.password,
      });
      localStorage.setItem("token", response.jwt);
      localStorage.setItem("username", response.user.username);
      setAuthenticated(true);
      setUsername(response.user.username);
    } catch (err) {
      console.error("Error signing in:", err);
      setError("Invalid email or password. Please try again.");
    }
  };

  return (
    <div className="auth-container">
      <h2>Sign In</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
        </div>
        {error && <p className="error">{error}</p>}
        <button type="submit">Sign In</button>
      </form>
      <p>
        Don't have an account?{" "}
        <Link to="/signup" className="link">
          Sign Up Here
        </Link>
      </p>
    </div>
  );
};

export default SignIn;
