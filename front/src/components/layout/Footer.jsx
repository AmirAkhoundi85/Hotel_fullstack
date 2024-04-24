import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.svg";

const Footer = () => {
  return (
    <footer className="py-3 border-top container-fluid">
      <div className="row row-cols-1 row-cols-md-2  align-items-center g-4 p-3 p-lg-5">
        <div className="col">
          <h5 className="text-white">Customer Support</h5>
          <p className=" mb-0 text-white">support@example.com</p>
          <p className=" mb-0 text-white">Phone: 123456</p>
        </div>

        <div className="col">
          <h5 className="text-white">Sales</h5>
          <p className=" mb-0 text-white">sales@example.com</p>
          <p className=" mb-0 text-white">Phone: 7894561</p>
        </div>

        <div className="col">
          <Link
            to="/"
            className="d-flex align-items-center mb-2 mb-lg-0 link-body-emphasis text-decoration-none"
          >
            <img src={logo} alt="" width="50" />
          </Link>
        </div>

        <ul className="nav col fs-4">
          <li className="nav-item">
            <a href="#" className="nav-link px-2 ">
              <i class="bi bi-twitter-x"></i>
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link px-2">
              <i class="bi bi-facebook"></i>
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link px-2">
              <i class="bi bi-instagram"></i>
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link px-2">
              <i class="bi bi-whatsapp"></i>
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
