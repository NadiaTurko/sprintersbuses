import React from "react";
import "./carrierProfileHeader.css";

import busLogo from "../../assets/logos/bus-logo.png";
import planetIcon from "../../assets/icons/planet.svg";
import phoneIcon from "../../assets/icons/phone.svg";
import fireIcon from "../../assets/icons/fire.svg";
import peopleIcon from "../../assets/icons/people.svg";
import trainIcon from "../../assets/icons/train.svg";
import locationIcon from "../../assets/icons/location.svg";
import townIcon from "../../assets/icons/town.svg";

export default function CarrierProfileHeader() {
  return (
    <section className="carrier-header">
      <div className="carrier-header__bg"></div>

      <div className="container carrier-header__container">
        <div className="carrier-header__routing">
          <h4>
            Головна / Профіль перевізника / <span>Stripe</span>
          </h4>
        </div>
        {/* LEFT SIDE */}
        <div className="carrier-header__left">
          <div className="carrier-header__logo">
            <img src={busLogo} alt="carrier logo" />
          </div>

          <div className="carrier-header__info">
            <div className="carrier-header__top">
              <h1 className="carrier-header__title">Stripe</h1>
              <span className="carrier-header__badge">43 Поїздок</span>
            </div>

            <div className="carrier-header__links">
              <a href="" className="carrier-header__link">
                <img src={planetIcon} alt="" />
                https://stripe.com
              </a>

              <a href="tel:+380735555555" className="carrier-header__link">
                <img src={phoneIcon} alt="" />
                +38 (073) 555 55 55
              </a>
            </div>

            <div className="carrier-header__stats">
              <div className="stat-item">
                <div className="stat-item__img">
                  <img src={fireIcon} alt="fire-icon" />
                </div>
                <div className="stat-item__block">
                  <span className="stat-item__label">На ринку від:</span>
                  <span className="stat-item__value">Травень 31, 2011</span>
                </div>
              </div>

              <div className="stat-item">
                <div className="stat-item__img">
                  <img src={peopleIcon} alt="people-icon" />
                </div>
                <div className="stat-item__block">
                  <span className="stat-item__label">
                    Перевезених пасажирів
                  </span>
                  <span className="stat-item__value">4000+</span>
                </div>
              </div>

              <div className="stat-item">
                <div className="stat-item__img">
                  <img src={trainIcon} alt="train-icon" />
                </div>
                <div className="stat-item__block">
                  <span className="stat-item__label">Автопарк</span>
                  <span className="stat-item__value">8 бусів</span>
                </div>
              </div>

              <div className="stat-item">
                <div className="stat-item__img">
                  <img src={locationIcon} alt="location-icon" />
                </div>
                <div className="stat-item__block">
                  <span className="stat-item__label">Обслуговуємо</span>
                  <span className="stat-item__value">8 країн</span>
                </div>
              </div>

              <div className="stat-item">
                <div className="stat-item__img">
                  <img src={townIcon} alt="town-icon" />
                </div>
                <div className="stat-item__block">
                  <span className="stat-item__label">Місто</span>
                  <span className="stat-item__value">Львів</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
