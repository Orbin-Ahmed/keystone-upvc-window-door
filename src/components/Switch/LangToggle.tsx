"use client";
import React, { useState } from "react";

export default function LanguageSwitch() {
  const [isChecked, setIsChecked] = useState(false);

  const handleToggle = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div className="hidden xl:flex justify-center ml-8">
      <div className="relative inline-block">
        <input
          id="language-toggle"
          type="checkbox"
          className="check-toggle check-toggle-round-flat hidden"
          checked={isChecked}
          onChange={handleToggle}
        />
        <label
          htmlFor="language-toggle"
          className="block w-24 h-9 bg-primary-color rounded-full relative cursor-pointer"
        >
          <span
            className={`absolute top-[5px] left-1.5 pl-2 font-semibold uppercase  ${
              isChecked ? "text-white" : "text-primary-color z-10"
            }`}
          >
            EN
          </span>
          <span
            className={`absolute top-[5px] right-1.5 pr-2 font-semibold uppercase  ${
              isChecked ? "text-primary-color z-10" : "text-white"
            }`}
          >
            AR
          </span>
          <span
            className={`absolute top-1 left-1 w-[45px] h-7 bg-white rounded-full transition-transform duration-200 ${
              isChecked ? "transform translate-x-[44px]" : ""
            }`}
          ></span>
        </label>
      </div>
    </div>
  );
}
