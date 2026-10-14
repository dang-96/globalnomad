"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

const BestActivity = () => {
  return (
    <section className="best-activity">
      <div className="best-activity-header">
        <h3 className="best-activity-title">인기체험</h3>
        <div className="best-activity-nav">
          <button
            type="button"
            className="best-activity-prev"
          >
            <span className="blind">이전</span>
          </button>
          <button
            type="button"
            className="best-activity-next"
          >
            <span className="blind">다음</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default BestActivity;
