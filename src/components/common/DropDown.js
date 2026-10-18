"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import Image from "next/image";
import clsx from "clsx";

const DropDown = ({ options, value, onChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropDownRef = useRef(null);

  const handleOptionClick = (option) => {
    onChange(option);
    setIsOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropDownRef.current && !dropDownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  return (
    <AnimatePresence>
      <div
        className="drop-down"
        ref={dropDownRef}
      >
        <button
          className="drop-down-button text-2lg-medium"
          type="button"
          onClick={() => setIsOpen(!isOpen)}
        >
          {value}
          <Image
            className={clsx("drop-down-icon", { active: isOpen })}
            src="/images/icons/icon-arrow-bottom.svg"
            alt="아래 화살표"
            width={13}
            height={8}
          />
        </button>
        {isOpen && (
          <motion.ul
            className="drop-down-list"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
          >
            {options.map((item, index) => {
              return (
                <li key={index}>
                  <button
                    type="button"
                    onClick={() => {
                      handleOptionClick(item);
                    }}
                  >
                    {item}
                  </button>
                </li>
              );
            })}
          </motion.ul>
        )}
      </div>
    </AnimatePresence>
  );
};

export default DropDown;
