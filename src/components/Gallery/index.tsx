"use client";
import { UseTranslation } from "@/app/i18n";
import Image from "next/image";
import React, { useEffect, useState } from "react";

type GalleryProps = {
  lng: string;
};

const Gallery = ({ lng }: GalleryProps) => {
  const [t, setT] = useState(() => (key: string) => key);

  useEffect(() => {
    const fetchTranslations = async () => {
      const { t: translation } = await UseTranslation(lng);
      setT(() => translation);
    };

    fetchTranslations();
  }, [lng]);

  return (
    <>
      <div className="w-full">
        <Image
          src="/images/Component 1.svg"
          alt="Top-image"
          width={1920}
          height={1080}
          layout="responsive"
          objectFit="cover"
        />
        <p className="mt-16 text-center text-3xl font-bold">
          {t("Product Specifications")}
        </p>
        <Image
          src="/images/Group 113.svg"
          alt="Details-image"
          width={1920}
          height={1080}
          layout="responsive"
          className="mt-8"
          objectFit="cover"
        />
        <p className="mt-16 text-center text-3xl font-bold">
          {t("Opening Types")}
        </p>
        <Image
          src="/images/Group 114.svg"
          alt="Details-image"
          width={1920}
          height={1080}
          layout="responsive"
          className="mt-8"
          objectFit="cover"
        />
      </div>
    </>
  );
};

export default Gallery;
