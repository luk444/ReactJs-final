import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import CartWidget from '../CartWidget/CardWidget';
import urlImage from './Furniture.png';

const NavBar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const handleToggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light custom-navbar">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          <img src={urlImage} alt="proyecto" width={100} />
        </Link>
        <div className="col-6 d-flex justify-content-end align-items-center">
          <CartWidget />
        </div>
        <button
          className="navbar-toggler"
          type="button"
          onClick={handleToggleNav}
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div
          className={`collapse navbar-collapse ${isNavOpen ? 'show' : ''}`}
        >
          <ul className="navbar-nav ms-auto text-center">
            <li className="nav-item">
              <NavLink className="nav-link active" aria-current="page" to="/Sillas">Sillas</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/Sillones">Sillones</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/Respaldos">Respaldos</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/cart"><CartWidget /></NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
