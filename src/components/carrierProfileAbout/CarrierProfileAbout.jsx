import React from "react";
import "./carrierProfileAbout.css";

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
                <img src="/src/assets/social/z.svg" alt="" />
                twitter.com/stripe
              </a>

              <a href="#" className="social-link">
                <img src="/src/assets/social/facebook.svg" alt="" />
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
              {[
                ["france.png", "Франція"],
                ["italy.png", "Італія"],
                ["germany.png", "Німеччина"],
                ["netherlands.png", "Нідерланди"],
                ["spain.png", "Іспанія"],
              ].map(([icon, name], i) => (
                <li className="country-item" key={i}>
                  <img src={`/src/assets/countries/${icon}`} alt="" />
                  <span>{name}</span>
                </li>
              ))}
            </ul>

            <button className="countries-toggle">
              Усі країни <img src="/src/assets/icons/Icon.svg" alt="" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
