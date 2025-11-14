import React, { useState } from "react";
import "./header.css";

import headerLogo from "../../assets/logos/logo.png";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="header">
      <div className="container">
        {/* LEFT */}
        <div className="header__left">
          <div className="header__logo">
            <img src={headerLogo} alt="logo" />
          </div>

          {/* BURGER BUTTON */}
          <button
            className={`burger ${isOpen ? "active" : ""}`}
            onClick={() => setIsOpen(!isOpen)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>

          {/* NAV */}
          <nav className={`header__nav ${isOpen ? "open" : ""}`}>
            <ul className="header__nav-list">
              <li>
                <a className="header__nav-link" href="">
                  Головна
                </a>
              </li>
              <li>
                <a className="header__nav-link" href="">
                  Перевізникам
                </a>
              </li>
              <li>
                <a className="header__nav-link" href="">
                  Про нас
                </a>
              </li>
              <li>
                <a className="header__nav-link" href="">
                  Профіль перевізника
                </a>
              </li>
            </ul>
          </nav>
        </div>

        {/* RIGHT */}
        <div className="header__right">
          <a href="" className="header__register-link">
            Створити профіль
          </a>
          <div className="header-right-line"></div>
          <a href="" className="header__login-link">
            Увійти
          </a>
        </div>
      </div>
    </header>
  );
}
