import React from "react";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import '@fortawesome/fontawesome-free/css/all.css';
import { Link } from 'react-router-dom';


function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark gradient-custom">
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
            <li className="nav-item text-center mx-2 mx-lg-1">
              <Link className="nav-link active" to="/Dashboard" aria-current="page">
                <div>
                  <i className="fas fa-home fa-lg mb-1"></i>
                </div>
                Dashboard
              </Link>
            </li>
            
                
          </ul>
          <ul className="navbar-nav ms-auto d-flex flex-row mt-3 mt-lg-0">
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
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
