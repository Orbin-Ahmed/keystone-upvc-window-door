"use client";
import Image from "next/image";
import React, { useState } from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import CustomButton from "../CustomButton";
import LangToggle from "../Switch/LangToggle";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

type headerProps = {};

const Header = ({}: headerProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <div className="sticky inset-x-0 top-0 z-10 bg-opacity-60 backdrop-blur-lg">
        <div className="flex items-center justify-between py-8 gap-4">
          <Image
            src="/logo.svg"
            alt="logo"
            width={284}
            height={80}
            className="object-contain"
          />
          <div className="flex items-center xl:hidden">
            <button onClick={toggleMenu}>
              {isMenuOpen ? <CloseIcon /> : <MenuIcon />}
            </button>
          </div>
          <div
            className={`${
              isMenuOpen ? "flex" : "hidden"
            } xl:flex flex-col xl:flex-row xl:gap-6 xl:items-center justify-center xl:static fixed top-24 right-0 xl:w-auto p-4 xl:p-0 z-50 xl:z-auto`}
          >
            <a className="xl:mb-0 mb-4">
              <button className="text-xl text-black font-semibold relative group hover:text-primary-color">
                Our Product{" "}
                <span>
                  <KeyboardArrowDownIcon />
                </span>
                <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-primary-color transition-all duration-500 group-hover:w-full"></span>
              </button>
            </a>
            <a className="xl:mb-0 mb-4">
              <button className="text-xl text-black font-semibold relative group hover:text-primary-color">
                Gallery
                <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-primary-color transition-all duration-500 group-hover:w-full"></span>
              </button>
            </a>
            <a className="xl:mb-0 mb-4">
              <CustomButton>
                <span className="mr-2">Free Estimate</span> <ArrowOutwardIcon />
              </CustomButton>
            </a>
            <LangToggle />
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
