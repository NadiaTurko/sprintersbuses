import React from "react";
import "./carrierProfileAbout.css";

import twitterIcon from "../../assets/social/z.svg";
import facebookIcon from "../../assets/social/facebook.svg";
import franceFlag from "../../assets/countries/france.png";
import italyFlag from "../../assets/countries/italy.png";
import germanyFlag from "../../assets/countries/germany.png";
import netherlandsFlag from "../../assets/countries/netherlands.png";
import spainFlag from "../../assets/countries/spain.png";
import arrowIcon from "../../assets/icons/Icon.svg";

const COUNTRIES = [
  { icon: franceFlag, name: "Франція" },
  { icon: italyFlag, name: "Італія" },
  { icon: germanyFlag, name: "Німеччина" },
  { icon: netherlandsFlag, name: "Нідерланди" },
  { icon: spainFlag, name: "Іспанія" },
];

export default function CarrierProfileAbout() {
  return (
    <section className="carrier-content">
      <div className="carrier-content__container">
        {/* LEFT COLUMN */}
        <div className="carrier-content__left">
          {/* Description */}
          <div className="carrier-description">
            <h2 className="carrier-title">Опис перевізника</h2>

            <p className="carrier-text">
              Stripe is a software platform for starting and running internet
              businesses. Millions of businesses rely on Stripe’s software tools
              to accept payments, expand globally, and manage their businesses
              online. Stripe has been at the forefront of expanding internet
              commerce, powering new business models, and supporting the latest
              platforms, from marketplaces to mobile commerce sites. We believe
              that growing the GDP of the internet is a problem rooted in code
              and design, not finance. Stripe is built for developers, makers,
              and creators.
            </p>
          </div>

          {/* Social */}
          <div className="carrier-social">
            <h2 className="carrier-title">Ми у соц. мережах</h2>

            <div className="carrier-social__links">
              <a href="#" className="social-link">
                <img src={twitterIcon} alt="" />
                twitter.com/stripe
              </a>

              <a href="#" className="social-link">
                <img src={facebookIcon} alt="" />
                facebook.com/StripeHQ
              </a>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN */}
        <div className="carrier-content__right">
          <div className="carrier-countries">
            <h2 className="carrier-title">Обслуговуємо країни</h2>

            <ul className="countries-list">
              {COUNTRIES.map(({ icon, name }, i) => (
                <li className="country-item" key={i}>
                  <img src={icon} alt="" />
                  <span>{name}</span>
                </li>
              ))}
            </ul>

            <button className="countries-toggle">
              Усі країни <img src={arrowIcon} alt="" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
