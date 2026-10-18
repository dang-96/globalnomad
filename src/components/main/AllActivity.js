"use client";

import { useState } from "react";

import clsx from "clsx";
import DropDown from "../common/DropDown";
import ActivityCard from "./ActivityCard";
import { allActionData } from "@/data/activities";

// 카테고리 데이터
const categories = ["문화 · 예술", "식음료", "스포츠", "투어", "관광", "웰빙"];
// 정렬 데이터
const priceSort = ["가격 낮은 순", "가격 높은 순"];

const AllActivity = () => {
  const [activeCategory, setActiveCategory] = useState("");
  const [selectedPrice, setSelectedPrice] = useState("가격");

  const handleCategoryClick = (item) => {
    setActiveCategory((prev) => {
      return prev === item ? "" : item;
    });
  };

  return (
    <section className="all-activity-wrap">
      <div className="all-activity-header">
        <ul className="category-list">
          {categories.map((item, index) => (
            <li
              key={index}
              className="text-2lg-medium"
            >
              <button
                type="button"
                className={clsx({ active: activeCategory === item })}
                onClick={() => handleCategoryClick(item)}
              >
                {item}
              </button>
            </li>
          ))}
        </ul>
        <DropDown
          options={priceSort}
          value={selectedPrice}
          onChange={setSelectedPrice}
        />
      </div>
      <h3 className="all-activity-title">🛼 모든 체험</h3>
      <div className="all-activity-list">
        {allActionData.map((item) => {
          return (
            <ActivityCard
              key={item.id}
              type={item.type}
              img={item.img}
              review={item.review}
              reviewTotal={item.reviewTotal}
              title={item.title}
              price={item.price}
            />
          );
        })}
      </div>
    </section>
  );
};

export default AllActivity;
