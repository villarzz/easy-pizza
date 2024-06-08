/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';

function Header() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light navbar-red p-3">
      <a className="navbar-brand" href="#">Easy Pizza</a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item active">
            <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Menu</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Fale Conosco</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              <i className="fas fa-shopping-cart"></i>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Header;
