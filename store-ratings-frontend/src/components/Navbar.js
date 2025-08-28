import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  const role = localStorage.getItem("role"); // store role after login

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    navigate("/login");
  };

  return (
    <nav style={{ padding: "10px", borderBottom: "1px solid black" }}>
      {token ? (
        <>
          <Link to="/stores" style={{ marginRight: "10px" }}>
            Stores
          </Link>
          {role === "admin" && (
            <Link to="/add-store" style={{ marginRight: "10px" }}>
              Add Store
            </Link>
          )}
          <button onClick={handleLogout}>Logout</button>
        </>
      ) : (
        <>
          <Link to="/login" style={{ marginRight: "10px" }}>
            Login
          </Link>
          <Link to="/signup">Signup</Link>
        </>
      )}
    </nav>
  );
};

export default Navbar;
