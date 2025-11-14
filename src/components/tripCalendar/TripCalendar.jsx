import React, { useState } from "react";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import "./tripCalendar.css";

import plusIcon from "../../assets/icons/plus.svg";

export default function TripCalendar() {
  const [selected, setSelected] = useState();

  return (
    <div className="calendar-box">
      <h2 className="calendar-title">Календар поїздок</h2>

      <button className="calendar-buy">
        <img src={plusIcon} alt="" />
        Купити квиток
      </button>

      <DayPicker
        mode="single"
        selected={selected}
        onSelect={setSelected}
        weekStartsOn={1}
        showOutsideDays
        className="custom-calendar"
      />
    </div>
  );
}
