import React from "react";
import TripCalendar from "../tripCalendar/TripCalendar";
import "./galleryCalendarSection.css";

export default function GalleryCalendarSection() {
  const galleryImages = [
    "/src/assets/buses/img1.png",
    "/src/assets/buses/img2.png",
    "/src/assets/buses/img3.png",
  ];

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
