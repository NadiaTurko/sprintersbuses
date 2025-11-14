import React from "react";
import "./driverCard.css";

import instagramIcon from "../../assets/social/insta.svg";
import linkedinIcon from "../../assets/social/linkedin.svg";

export default function DriverCard({ name, exp, img }) {
  return (
    <div className="driver-card">
      <img src={img} alt={name} className="driver-card__img" />

      <h3 className="driver-card__name">{name}</h3>
      <p className="driver-card__exp">Досвід роботи: {exp}</p>

      <div className="driver-card__icons">
        <a href="#">
          <img src={instagramIcon} alt="instagram" />
        </a>
        <a href="#">
          <img src={linkedinIcon} alt="linkedin" />
        </a>
      </div>
    </div>
  );
}
