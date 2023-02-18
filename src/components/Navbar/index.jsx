import React from 'react';
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';

function Navbar() {
    return (
      
      <nav className="navbar navbar-expand-lg navbar-dark gradient-custom">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">ManageTok</a>
      
          <button className="navbar-toggler" type="button" data-mdb-toggle="collapse"
            data-mdb-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
            aria-label="Toggle navigation">
            <i className="fas fa-bars text-light"></i>
          </button>
      
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto d-flex flex-row mt-3 mt-lg-0">
              <li className="nav-item text-center mx-2 mx-lg-1">
                <a className="nav-link active" aria-current="page" href="#!">
                  <div>
                    <i className="fas fa-home fa-lg mb-1"></i>
                  </div>
                  Dashboard
                </a>
              </li>
              <li className="nav-item text-center mx-2 mx-lg-1">
                <a className="nav-link" href="#!">
                  <div>
                    <i className="far fa-envelope fa-lg mb-1"></i>
                    <span className="badge rounded-pill badge-notification bg-dark"></span>
                  </div>
                  Link
                </a>
              </li>
              <li className="nav-item text-center mx-2 mx-lg-1">
                <a className="nav-link disabled" aria-disabled="true" href="#!">
                  <div>
                    <i className="far fa-envelope fa-lg mb-1"></i>
                    <span className="badge rounded-pill badge-notification bg-dark">11</span>
                  </div>
                  Disabled
                </a>
              </li>
              <li className="nav-item dropdown text-center mx-2 mx-lg-1">
                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-mdb-toggle="dropdown"
                  aria-expanded="false">
                  <div>
                    <i className="far fa-envelope fa-lg mb-1"></i>
                    <span className="badge rounded-pill badge-notification bg-dark">11</span>
                  </div>
                  Accounts
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li><a className="dropdown-item" href="#">Action</a></li>
                  <li><a className="dropdown-item" href="#">Another action</a></li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">Something else here</a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
     
    );
  }
  

export default Navbar;