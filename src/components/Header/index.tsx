"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import CustomButton from "../CustomButton";
import LangToggle from "../Switch/LangToggle";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { UseTranslation } from "@/app/i18n";
import Link from "next/link";

type HeaderProps = {
  lng: string;
  handleLanguageChange: (newLang: string) => void;
};

const Header: React.FC<HeaderProps> = ({ lng, handleLanguageChange }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [t, setT] = useState(() => (key: string) => key);

  useEffect(() => {
    const fetchTranslations = async () => {
      const { t: translation } = await UseTranslation(lng);
      setT(() => translation);
    };

    fetchTranslations();
  }, [lng]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <div className="sticky inset-x-0 top-0 z-10 bg-opacity-60 px-8 backdrop-blur-lg 2xs:px-12 md:px-16">
        <div className="flex items-center justify-between gap-4 py-2">
          <Link href="/">
            <Image
              src="/logo.svg"
              alt="logo"
              width={284}
              height={80}
              className="object-contain"
            />
          </Link>
          <div className="flex items-center xl:hidden">
            <button onClick={toggleMenu}>
              {isMenuOpen ? <CloseIcon /> : <MenuIcon />}
            </button>
          </div>
          <div
            className={`${
              isMenuOpen ? "flex" : "hidden"
            } fixed right-0 top-24 z-50 flex-col justify-center rounded-md bg-white p-4 xl:static xl:z-auto xl:flex xl:w-auto xl:flex-row xl:items-center xl:gap-6 xl:bg-transparent xl:p-0`}
          >
            <Link href="/products" className="mb-4 xl:mb-0">
              <button className="group relative text-xl font-semibold text-black hover:text-primary-color">
                {t("Gallery")}
                <span>
                  <KeyboardArrowDownIcon />
                </span>
                <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-primary-color transition-all duration-500 group-hover:w-full"></span>
              </button>
            </Link>
            <Link href="/gallery" className="mb-4 xl:mb-0">
              <button className="group relative text-xl font-semibold text-black hover:text-primary-color">
                {t("Our Product")}
                <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-primary-color transition-all duration-500 group-hover:w-full"></span>
              </button>
            </Link>
            <Link href="/contact-us" className="mb-4 xl:mb-0">
              <CustomButton>
                <span className="mr-2">{t("Free Estimate")}</span>{" "}
                <ArrowOutwardIcon />
              </CustomButton>
            </Link>
            <LangToggle
              currentLanguage={lng}
              onLanguageChange={handleLanguageChange}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
