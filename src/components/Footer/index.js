import React from 'react';
import { Link } from 'react-router-dom';
import "./index.css"
function Footer() {
  return (
    <footer className="gradient-custom py-3">
      <div className="container">
        <div className="row">
          <div className="col-sm-6 text-white">
            <p>&copy; 2023 ManageTok. All rights reserved.</p>
          </div>
          <div className="col-sm-6 text-end">
            <Link to="/terms" className="text-white mx-3">Terms of Service</Link>
            <Link to="/privacy" className="text-white mx-3">Privacy Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
