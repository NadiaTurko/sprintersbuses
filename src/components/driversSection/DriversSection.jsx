import React from "react";
import DriverCard from "../driverCard/DriverCard";
import "./driversSection.css";

export default function DriversSection() {
  const drivers = [
    {
      id: 1,
      name: "Олександр",
      exp: "5 років",
      img: "/src/assets/avatars/ava2.png",
    },
    {
      id: 2,
      name: "Володимир",
      exp: "7 років",
      img: "/src/assets/avatars/ava1.png",
    },
    { id: 3, name: "Ірина", exp: "1 рік", img: "/src/assets/avatars/ava2.png" },
    {
      id: 4,
      name: "Михайло",
      exp: "1 рік",
      img: "/src/assets/avatars/ava1.png",
    },
    {
      id: 5,
      name: "Юлія",
      exp: "2 роки",
      img: "/src/assets/avatars/person1.png",
    },
  ];

  return (
    <section className="drivers">
      <div className="drivers__container">
        {/* Header */}
        <div className="drivers__top">
          <h2 className="drivers__title">Наші водії</h2>
          <a href="#" className="drivers__link">
            Усі водії (7)
          </a>
        </div>

        {/* Cards */}
        <div className="drivers__list">
          {drivers.map((d) => (
            <DriverCard key={d.id} {...d} />
          ))}
        </div>
      </div>
    </section>
  );
}
