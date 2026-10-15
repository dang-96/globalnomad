"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import ActivityCard from "./ActivityCard";
import Image from "next/image";
import { useState } from "react";

const BestActivity = () => {
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  return (
    <section className="best-activity">
      <div className="best-activity-header">
        <h3 className="best-activity-title">🔥 인기체험</h3>
        <div className="best-activity-nav">
          <button
            type="button"
            className="best-activity-prev"
            disabled={isBeginning}
          >
            <Image
              src={`/images/icons/icon-arrow-left-${isBeginning ? "off" : "on"}.svg`}
              alt="왼쪽 화살표"
              width={11}
              height={22}
            />
          </button>
          <button
            type="button"
            className="best-activity-next"
            disabled={isEnd}
          >
            <Image
              src={`/images/icons/icon-arrow-right-${isEnd ? "off" : "on"}.svg`}
              alt="오른쪽 화살표"
              width={11}
              height={22}
            />
          </button>
        </div>
      </div>
      <Swiper
        className="keyvisual-swiper"
        modules={[Navigation, Pagination]}
        navigation={{
          prevEl: ".best-activity-prev",
          nextEl: ".best-activity-next",
        }}
        slidesPerView={3}
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        onSlideChange={(swiper) => {
          setIsBeginning(swiper.isBeginning);
          setIsEnd(swiper.isEnd);
        }}
        onSwiper={(swiper) => {
          setIsBeginning(swiper.isBeginning);
          setIsEnd(swiper.isEnd);
        }}
      >
        <SwiperSlide>
          <ActivityCard
            type="inner"
            img="/images/keyvisual01.png"
            review="4.8"
            reviewTotal="123"
            title="서울에서 가장 인기 있는 투어"
            price="38,000"
          />
        </SwiperSlide>
        <SwiperSlide>
          <ActivityCard
            type="inner"
            img="/images/keyvisual02.png"
            review="4.7"
            reviewTotal="789"
            title="제주도에서 즐기는 자연 탐방"
            price="65,000"
          />
        </SwiperSlide>
        <SwiperSlide>
          <ActivityCard
            type="inner"
            img="/images/keyvisual03.png"
            review="4.6"
            reviewTotal="101"
            title="대전에서 만나는 문화体험"
            price="25,000"
          />
        </SwiperSlide>
        <SwiperSlide>
          <ActivityCard
            type="inner"
            img="/images/keyvisual01.png"
            review="4.8"
            reviewTotal="123"
            title="서울에서 가장 인기 있는 투어"
            price="38,000"
          />
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default BestActivity;
