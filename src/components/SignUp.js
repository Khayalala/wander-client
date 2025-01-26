import React, { useState } from "react";
import axios from "axios";
import "../styles/_auth.scss";

const SignUp = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:1337/api/auth/local/register", {
        username: formData.username,
        email: formData.email,
        password: formData.password,
      });
      setSuccess("Account created successfully! You can now sign in.");
      setFormData({ username: "", email: "", password: "" });
      setError("");
    } catch (err) {
      setError("Failed to create an account. Please try again.");
    }
  };

  return (
    <div className="auth-container">
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Username</label>
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
          />
        </div>
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
        {success && <p className="success">{success}</p>}
        <button type="submit">Sign Up</button>
      </form>
      <p>
        Already have an account?{" "}
        <a href="/signin" className="link">
          Sign In Here
        </a>
      </p>
    </div>
  );
};

export default SignUp;
