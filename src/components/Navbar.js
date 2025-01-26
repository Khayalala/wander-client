// import React from "react";
// import "../styles/_navbar.scss";

// const Navbar = ({ authenticated, setAuthenticated }) => {
//   const handleLogout = () => {
//     localStorage.removeItem("token"); // Remove token from localStorage
//     setAuthenticated(false); // Update authentication state
//   };

//   return (
//     <nav className="navbar">
//       <div className="logo">Wander Plan</div>
//       <div className="menu-container">
//         {authenticated ? (
//           <>
//             <a href="#home">Home</a>
//             <a href="#about">About</a>
//             <a href="#contact">Contact</a>
//             <button className="logout-btn" onClick={handleLogout}>
//               Logout
//             </button>
//           </>
//         ) : (
//           <>
//             <a href="/signin">Sign In</a>
//             <a href="/signup">Sign Up</a>
//           </>
//         )}
//       </div>
//       <div className="hamburger">
//         <span></span>
//         <span></span>
//         <span></span>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

import React from "react";
import "../styles/_navbar.scss";

const Navbar = ({ authenticated, username, onLogout }) => {
  return (
    <nav className="navbar">
      <div className="logo">Wander Plan</div>
      <div className="menu-container">
        {authenticated ? (
          <>
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
            <span className="username">Hello, {username}</span>
            <button className="logout-btn" onClick={onLogout}>
              Logout
            </button>
          </>
        ) : (
          <>
            <a href="/signin">Sign In</a>
            <a href="/signup">Sign Up</a>
          </>
        )}
      </div>
      <div className="hamburger">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </nav>
  );
};

export default Navbar;
