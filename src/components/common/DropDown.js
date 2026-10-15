"use client";

import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";

const DropDown = ({ options }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <AnimatePresence>
      <div className="drop-down">
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
        >
          정렬
        </button>
        {isOpen && (
          <motion.ul
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
          >
            {options.map((item, index) => {
              return (
                <li key={index}>
                  <button type="button">{item}</button>
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
