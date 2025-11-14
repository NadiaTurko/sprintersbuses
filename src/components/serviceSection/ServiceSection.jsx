import React from "react";
import ServiceItem from "../serviceItem/ServiceItem";
import "./serviceSection.css";

import fanIcon from "../../assets/service-icons/fan.png";
import wifiIcon from "../../assets/service-icons/wifi.png";
import monitorIcon from "../../assets/service-icons/monitor.png";
import wcIcon from "../../assets/service-icons/wc.png";
import weekendIcon from "../../assets/service-icons/weekend.png";
import handsIcon from "../../assets/service-icons/hands.png";

export default function ServiceSection() {
  const services = [
    { icon: fanIcon, label: "Кондиціонер" },
    { icon: wifiIcon, label: "Wi-Fi" },
    { icon: monitorIcon, label: "TV" },
    { icon: wcIcon, label: "Туалет" },
    { icon: weekendIcon, label: "Зручні сидіння" },
    { icon: handsIcon, label: "Перевозимо тварин" },
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
          {services.map(({ icon, label }, i) => (
            <ServiceItem key={i} icon={icon} label={label} />
          ))}
        </div>
      </div>
    </section>
  );
}
