import React from "react";
import { Link, useLocation } from "react-router-dom";
import headerLogo from "../images/logo.png";
import "../blocks/header.css";

function AppHeader({ isLoggedIn, onLogout }) {
  const location = useLocation();
  return (
    <header className="header">
      <div className="header__content">
        <img src={headerLogo} alt="Logo header" className="header__logo" />
        <nav className="header__nav">
          {isLoggedIn ? (
            <>
              <Link to="/profile" className="header__link">
                Perfil
              </Link>
              <button className="header__button" onClick={onLogout}>
                Cerrar sesión
              </button>
            </>
          ) : (
            <>
              {location.pathname === "/signin" ? (
                <Link to="/signup" className="header__link">
                  Registrarse
                </Link>
              ) : (
                <Link to="/signin" className="header__link">
                  Iniciar Sesión
                </Link>
              )}
            </>
          )}
        </nav>
      </div>

      <div className="header__line"></div>
    </header>
  );
}

export default AppHeader;
