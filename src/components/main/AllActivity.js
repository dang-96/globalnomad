"use client";

import { useState } from "react";

import clsx from "clsx";
import DropDown from "../common/DropDown";

const categories = ["문화 · 예술", "식음료", "스포츠", "투어", "관광", "웰빙"];
const priceSort = ["가격 낮은 순", "가격 높은 순"];

const AllActivity = () => {
  const [activeCategory, setActiveCategory] = useState("");

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
        <DropDown options={priceSort} />
      </div>
      <h3 className="all-activity-title">🛼 모든 체험</h3>
    </section>
  );
};

export default AllActivity;
