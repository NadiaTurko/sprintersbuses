import React from "react";
import TripCalendar from "../tripCalendar/TripCalendar";
import "./galleryCalendarSection.css";

import busImageOne from "../../assets/buses/img1.png";
import busImageTwo from "../../assets/buses/img2.png";
import busImageThree from "../../assets/buses/img3.png";

export default function GalleryCalendarSection() {
  const galleryImages = [busImageOne, busImageTwo, busImageThree];

  return (
    <section className="gallery-calendar">
      <div className="gallery-calendar__container">
        {/* LEFT — Gallery */}
        <div className="gallery">
          {galleryImages.map((src, i) => (
            <div className="gallery__item" key={i}>
              <img src={src} alt={`gallery-${i}`} />
            </div>
          ))}
        </div>

        {/* RIGHT — Calendar */}
        <TripCalendar />
      </div>
    </section>
  );
}
