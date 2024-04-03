import React from 'react'
import { Link } from 'react-router-dom';
import logo from '../assets/images/logo.svg'

const Footer = () => {
  return (
    <footer class="py-3 border-top bg-dark">
      <div className="px-4 d-flex flex-wrap justify-content-between align-items-center">
        <p class="col-md-4 mb-0 text-white">© 2024 Company, Inc</p>

        <Link
          to="/"
          className="d-flex align-items-center mb-2 mb-lg-0 link-body-emphasis text-decoration-none"
        >
          <img src={logo} alt="" width="50" />
        </Link>

        <ul class="nav col-md-4 justify-content-end ">
          <li class="nav-item">
            <a href="#" class="nav-link px-2 ">
              Home
            </a>
          </li>
          <li class="nav-item">
            <a href="#" class="nav-link px-2">
              Features
            </a>
          </li>
          <li class="nav-item">
            <a href="#" class="nav-link px-2">
              Pricing
            </a>
          </li>
          <li class="nav-item">
            <a href="#" class="nav-link px-2">
              FAQs
            </a>
          </li>
          <li class="nav-item">
            <a href="#" class="nav-link px-2">
              About
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer