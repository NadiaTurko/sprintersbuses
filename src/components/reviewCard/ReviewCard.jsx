import { useMemo } from "react";
import "./reviewCard.css";

import starIcon from "../../assets/icons/star.svg";

export default function ReviewCard({ name, route, date, text, img, rating }) {
  const stars = useMemo(
    () => Array.from({ length: rating }, (_, i) => i),
    [rating]
  );

  return (
    <div className="review-card">
      <div className="review-card__header">
        <img src={img} alt={name} className="review-avatar" />
        <div>
          <h3 className="review-name">{name}</h3>
          <p className="review-route">{route}</p>
          <p className="review-date">{date}</p>
        </div>
      </div>

      <p className="review-text">{text}</p>

      <div
        className="review-stars"
        role="img"
        aria-label={`Рейтинг: ${rating} зірок`}
      >
        {stars.map((index) => (
          <img key={index} src={starIcon} alt="" aria-hidden="true" />
        ))}
      </div>
    </div>
  );
}
