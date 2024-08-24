"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Header from "@/components/Header";
import Gallery from "@/components/Gallery";
import Footer from "@/components/Footer";

export default function ContactUs({ params }: { params: { lng: string } }) {
  const [currentLanguage, setCurrentLanguage] = useState(params.lng);
  const router = useRouter();

  const handleLanguageChange = (newLang: string) => {
    setCurrentLanguage(newLang);
    router.push(`/${newLang}/contact-us`);
  };

  return (
    <>
      <Header
        lng={currentLanguage}
        handleLanguageChange={handleLanguageChange}
      />
      <div className="container mx-auto w-5/6 md:w-4/6">
        <Gallery lng={currentLanguage} />
      </div>
      <Footer lng={currentLanguage} />
    </>
  );
}
