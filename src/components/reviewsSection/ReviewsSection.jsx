import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import ReviewCard from "../reviewCard/ReviewCard";
import "./reviewsSection.css";

import reviewerOne from "../../assets/avatars/person2.png";
import reviewerTwo from "../../assets/avatars/person3.png";

const REVIEWS = [
  {
    name: "Ben Yardley",
    route: "Київ - Кишинів",
    date: "1 May 2023",
    text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
    img: reviewerOne,
    rating: 5,
  },
  {
    name: "Craig Martin",
    route: "Львів - Париж",
    date: "1 May 2023",
    text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad minim veniam.`,
    img: reviewerTwo,
    rating: 4,
  },
  // ще слайди при потребі
];

export default function ReviewsSection() {
  const reviews = REVIEWS;

  return (
    <section className="reviews-section">
      <div className="reviews-section__container">
        {/* LEFT COLUMN */}
        <div className="reviews-left">
          <h2 className="reviews-title">
            Що <span>кажуть люди?</span>
          </h2>

          <p className="reviews-subtitle">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>

          <button className="reviews-btn">Залишити відгук</button>
        </div>

        {/* RIGHT COLUMN — SWIPER */}
        <div className="reviews-right">
          <div className="reviews-swiper-wrapper">
            <Swiper
              modules={[Pagination]}
              spaceBetween={30}
              loop={true}
              loopAdditionalSlides={2}
              loopPreventsSliding={false}
              pagination={{
                clickable: true,
                dynamicBullets: true,
              }}
              breakpoints={{
                0: {
                  slidesPerView: 1,
                  spaceBetween: 20,
                },
                900: {
                  slidesPerView: 2,
                  spaceBetween: 30,
                },
              }}
            >
              {reviews.map((rev, i) => (
                <SwiperSlide key={i} className="review-slide">
                  <ReviewCard {...rev} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
}
