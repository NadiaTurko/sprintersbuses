import React from "react";
import "./footer.css";

import footerLogo from "../../assets/logos/footer-logo.svg";
import phoneBlueIcon from "../../assets/icons/phone-blue.svg";
import emailIcon from "../../assets/icons/email.svg";
import socialAllIcon from "../../assets/social/all.svg";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__col footer__brand">
          <img src={footerLogo} alt="Sprinters logo" className="footer__logo" />

          <p className="footer__desc">
            Платформа пошуку перевізників та бронювання поїздок
          </p>
        </div>

        {/* COLUMN 2 — CLIENTS */}
        <div className="footer__col">
          <h4 className="footer__title">Клієнтам</h4>
          <ul className="footer__list">
            <li>
              <a href="">Головна</a>
            </li>
            <li>
              <a href="">Про нас</a>
            </li>
            <li>
              <a href="">Ціни</a>
            </li>
            <li>
              <a href="">Маршрути</a>
            </li>
            <li>
              <a href="">Політика приватності</a>
            </li>
          </ul>
        </div>

        {/* COLUMN 3 — CARRIERS */}
        <div className="footer__col">
          <h4 className="footer__title">Перевізникам</h4>
          <ul className="footer__list">
            <li>
              <a href="">Help Docs</a>
            </li>
            <li>
              <a href="">Особистий кабінет</a>
            </li>
            <li>
              <a href="">Оновлення</a>
            </li>
            <li>
              <a href="">Контакти</a>
            </li>
          </ul>
        </div>

        {/* COLUMN 4 — FEEDBACK */}
        <div className="footer__col footer__feedback">
          <h4 className="footer__title">Зворотній зв’язок</h4>

          <p className="footer__text">
            Маєш пропозиції щодо покращення сервісу — пиши нам!
          </p>

          <div className="footer__mail-form">
            <input type="email" placeholder="Email Address" />
            <button>Надіслати</button>
          </div>

          <div className="footer__contacts">
            <p>
              <img src={phoneBlueIcon} alt="phone" /> +38 (073) 555 55 55
            </p>
            <p>
              <img src={emailIcon} alt="email" /> gmail@gmail.com
            </p>
          </div>
        </div>
      </div>

      {/* BOTTOM ROW */}
      <div className="footer__bottom">
        <p>2024 © Sprinters. All rights reserved.</p>

        <div className="footer__socials">
          <a href="#">
            <img src={socialAllIcon} alt="telegram" />
          </a>
        </div>
      </div>
    </footer>
  );
}
