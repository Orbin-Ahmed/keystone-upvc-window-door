"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Header from "@/components/Header";
import Gallery from "@/components/Gallery";
import Footer from "@/components/Footer";

export default function GalleryPage({ params }: { params: { lng: string } }) {
  const [currentLanguage, setCurrentLanguage] = useState(params.lng);
  const router = useRouter();

  const handleLanguageChange = (newLang: string) => {
    setCurrentLanguage(newLang);
    router.push(`/${newLang}/gallery`);
  };

  return (
    <>
      <Header
        lng={currentLanguage}
        handleLanguageChange={handleLanguageChange}
      />
      <Gallery lng={currentLanguage} />
      <Footer lng={currentLanguage} />
    </>
  );
}
