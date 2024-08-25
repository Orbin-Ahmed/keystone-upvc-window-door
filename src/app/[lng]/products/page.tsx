"use client";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ProductPin from "@/components/ProductPin";
import SlideShow from "@/components/SlideShow";
import { useRouter } from "next/navigation";
import { useState } from "react";

const images = ["/images/sl1.jpg", "/images/sl2.jpg", "/images/sl3.jpg"];

export default function ProductPage({ params }: { params: { lng: string } }) {
  const [currentLanguage, setCurrentLanguage] = useState(params.lng);
  const router = useRouter();

  const handleLanguageChange = (newLang: string) => {
    setCurrentLanguage(newLang);
    router.push(`/${newLang}/products`);
  };
  return (
    <>
      <Header
        lng={currentLanguage}
        handleLanguageChange={handleLanguageChange}
      />
      <SlideShow images={images} lng={currentLanguage} />
      <ProductPin />
      <Footer lng={currentLanguage} />
    </>
  );
}
