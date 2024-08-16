"use client";
import React from "react";

type LanguageToggleProps = {
  currentLanguage: string;
  onLanguageChange: (newLang: string) => void;
};

export default function LanguageToggle({
  currentLanguage,
  onLanguageChange,
}: LanguageToggleProps) {
  const isChecked = currentLanguage === "ar";

  const handleToggle = () => {
    const newLang = isChecked ? "en" : "ar";
    onLanguageChange(newLang);
  };

  return (
    <div className="ml-8 hidden justify-center xl:flex">
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
          className="relative block h-9 w-24 cursor-pointer rounded-full bg-primary-color"
        >
          <span
            className={`absolute left-1.5 top-[5px] pl-2 font-semibold uppercase ${
              isChecked ? "text-white" : "z-10 text-primary-color"
            }`}
          >
            EN
          </span>
          <span
            className={`absolute right-1.5 top-[5px] pr-2 font-semibold uppercase ${
              isChecked ? "z-10 text-primary-color" : "text-white"
            }`}
          >
            AR
          </span>
          <span
            className={`absolute left-1 top-1 h-7 w-[45px] rounded-full bg-white transition-transform duration-200 ${
              isChecked ? "translate-x-[44px] transform" : ""
            }`}
          ></span>
        </label>
      </div>
    </div>
  );
}
