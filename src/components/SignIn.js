// import React, { useState } from "react";
// import axios from "axios";
// import "../styles/_auth.scss";

// const SignIn = ({ setAuthenticated }) => {
//   const [formData, setFormData] = useState({ email: "", password: "" });
//   const [error, setError] = useState("");

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.post(
//         "http://localhost:1337/api/auth/local",
//         {
//           identifier: formData.email,
//           password: formData.password,
//         }
//       );
//       localStorage.setItem("token", response.data.jwt);
//       setAuthenticated(true);
//     } catch (err) {
//       setError("Invalid email or password. Please try again.");
//     }
//   };

//   return (
//     <div className="auth-container">
//       <h2>Sign In</h2>
//       <form onSubmit={handleSubmit}>
//         <div className="form-group">
//           <label>Email</label>
//           <input
//             type="email"
//             name="email"
//             value={formData.email}
//             onChange={handleChange}
//           />
//         </div>
//         <div className="form-group">
//           <label>Password</label>
//           <input
//             type="password"
//             name="password"
//             value={formData.password}
//             onChange={handleChange}
//           />
//         </div>
//         {error && <p className="error">{error}</p>}
//         <button type="submit">Sign In</button>
//       </form>
//       <p>
//         Don't have an account?{" "}
//         <a href="/signup" className="link">
//           Sign Up Here
//         </a>
//       </p>
//     </div>
//   );
// };

// export default SignIn;

import React, { useState } from "react";
import axios from "axios";
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
      const response = await axios.post(
        "http://localhost:1337/api/auth/local",
        {
          identifier: formData.email,
          password: formData.password,
        }
      );
      localStorage.setItem("token", response.data.jwt);
      localStorage.setItem("username", response.data.user.username);
      setAuthenticated(true);
      setUsername(response.data.user.username);
    } catch (err) {
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
        <a href="/signup" className="link">
          Sign Up Here
        </a>
      </p>
    </div>
  );
};

export default SignIn;
