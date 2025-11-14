import React from "react";
import ServiceItem from "../serviceItem/ServiceItem";
import "./serviceSection.css";

export default function ServiceSection() {
  const services = [
    ["fan.png", "Кондиціонер"],
    ["wifi.png", "Wi-Fi"],
    ["monitor.png", "TV"],
    ["wc.png", "Туалет"],
    ["weekend.png", "Зручні сидіння"],
    ["hands.png", "Перевозимо тварин"],
  ];

  return (
    <section className="service">
      <div className="service__container">
        <div className="service__header">
          <h2 className="service__title">Сервіс</h2>
          <p className="service__subtitle">
            Найкращі умови для вашого комфорту
          </p>
        </div>

        <div className="service__list">
          {services.map(([icon, label], i) => (
            <ServiceItem key={i} icon={icon} label={label} />
          ))}
        </div>
      </div>
    </section>
  );
}
