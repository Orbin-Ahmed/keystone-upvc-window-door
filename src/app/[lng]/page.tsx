"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Header from "@/components/Header";
import Benifits_1 from "@/sections/Benifits_1";
import Benifits_2 from "@/sections/Benifits_2";
import Hero from "@/sections/Hero";
import OurStory from "@/sections/OurStory";

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
      <OurStory />
      <Benifits_1 />
      <Benifits_2 />
    </>
  );
}
