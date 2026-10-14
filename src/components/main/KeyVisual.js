"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import "swiper/css";

const KeyVisual = () => {
  return (
    <section className="keyvisual">
      <Swiper
        className="keyvisual-swiper"
        modules={[Pagination]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        loop
      >
        <SwiperSlide>
          <div
            className="keyvisual-slide"
            style={{
              backgroundImage: "url('/images/keyvisual01.png')",
            }}
          >
            <div className="keyvisual-content">
              <h2 className="keyvisual-title">
                함께 배우면 즐거운
                <br />
                스트릿 댄스
              </h2>
              <span className="keyvisual-subtitle">1월의 인기 체험 BEST</span>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="keyvisual-slide"
            style={{
              backgroundImage: "url('/images/keyvisual02.png')",
            }}
          >
            <div className="keyvisual-content">
              <h2 className="keyvisual-title">
                함께 배우면 즐거운
                <br />
                스트릿 댄스
              </h2>
              <span className="keyvisual-subtitle">1월의 인기 체험 BEST</span>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default KeyVisual;
