"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Header from "@/components/Header";
import Benifits_1 from "@/sections/Benifits_1";
import Benifits_2 from "@/sections/Benifits_2";
import Hero from "@/sections/Hero";
import OurStory from "@/sections/OurStory";
import Benefits_3 from "@/sections/Benefits_3";
import FourReasons from "@/sections/FourReasons";
import BonusSection from "@/sections/BonusSection";
import Faq from "@/sections/Faq";
import Footer from "@/components/Footer";

export default function Home({ params }: { params: { lng: string } }) {
  const [currentLanguage, setCurrentLanguage] = useState(params.lng);
  const router = useRouter();

  const handleLanguageChange = (newLang: string) => {
    setCurrentLanguage(newLang);
    router.push(`/${newLang}`);
  };

  return (
    <>
      <Header
        lng={currentLanguage}
        handleLanguageChange={handleLanguageChange}
      />
      <Hero lng={currentLanguage} />
      <OurStory lng={currentLanguage} />
      <Benifits_1 lng={currentLanguage} />
      <Benifits_2 lng={currentLanguage} />
      <Benefits_3 lng={currentLanguage} />
      <FourReasons lng={currentLanguage} />
      <BonusSection lng={currentLanguage} />
      <Faq lng={currentLanguage} />
      <Footer lng={currentLanguage} />
    </>
  );
}
