import React from "react";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.css";
import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import UserContext from "../../UserContext";
import { getAuth, signOut } from "firebase/auth";

function Navbar() {
  const { user, setUser } = useContext(UserContext);
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      const auth = getAuth();
      await signOut(auth);
      setUser(null);
      navigate("/login");
    } catch (error) {
      console.error("Error logging out user", error);
    }
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark gradient-custom sticky-top">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          ManageTok
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-mdb-toggle="collapse"
          data-mdb-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <i className="fas fa-bars text-light"></i>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto d-flex flex-row mt-3 mt-lg-0">
            {user && (
              <li className="nav-item text-center mx-2 mx-lg-1">
                <Link
                  className="nav-link active"
                  to="/Dashboard"
                  aria-current="page"
                >
                  <div>
                    <i className="fas fa-home fa-lg mb-1"></i>
                  </div>
                  Dashboard
                </Link>
              </li>
            )}
          </ul>
          <ul className="navbar-nav ms-auto d-flex flex-row mt-3 mt-lg-0">
            {user ? (
              <li className="nav-item text-center mx-2 mx-lg-1">
                <Link className="nav-link" to="/Login" onClick={handleLogout}>
                  <div>
                    <i className="fa-solid fa-right-from-bracket fa-lg mb-1"></i>
                  </div>
                  Logout
                </Link>
              </li>
            ) : (
              <>
                <li className="nav-item text-center mx-2 mx-lg-1">
                  <Link className="nav-link" to="/Login">
                    <div>
                      <i className="fa-solid fa-right-to-bracket fa-lg mb-1"></i>
                    </div>
                    Login
                  </Link>
                </li>
                <li className="nav-item text-center mx-2 mx-lg-1">
                  <Link className="nav-link" to="/Signup">
                    <div>
                      <i className="fa-solid fa-user-plus fa-lg mb-1"></i>
                    </div>
                    Sign-Up
                  </Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
