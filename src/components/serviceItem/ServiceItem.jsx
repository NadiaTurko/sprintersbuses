import React from "react";
import "./serviceItem.css";

export default function ServiceItem({ icon, label }) {
  return (
    <div className="service-item">
      <img src={`/src/assets/service-icons/${icon}`} alt={label} />
      <span>{label}</span>
    </div>
  );
}
