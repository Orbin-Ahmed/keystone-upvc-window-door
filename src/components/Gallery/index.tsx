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
          src="/images/Component_1.svg"
          alt="Top-image"
          width={1920}
          height={1080}
          layout="responsive"
        />
        <p className="mt-16 text-center text-3xl font-bold">
          {t("Product Specifications")}
        </p>
        <Image
          src="/images/Group_113.svg"
          alt="Details-image"
          width={1920}
          height={1080}
          layout="responsive"
          className="mt-8"
        />
        <p className="mt-16 text-center text-3xl font-bold">
          {t("Opening Types")}
        </p>
        <Image
          src="/images/Group_114.svg"
          alt="Details-image"
          width={1920}
          height={1080}
          layout="responsive"
          className="mt-8"
        />
        <div className="mt-12 flex flex-col items-center justify-between gap-2 sm:flex-row">
          <div className="flex basis-1/3 flex-col items-center justify-center">
            <Image
              src="/images/Anthracite_grey.jpg"
              width="320"
              height="230"
              alt="Anthracite grey"
              className="object-contain"
            />
            <p className="mt-2 text-base font-bold">Anthracite grey</p>
          </div>
          <div className="flex basis-1/3 flex-col items-center justify-center">
            <Image
              src="/images/Brushed_aluminium.jpg"
              width="320"
              height="230"
              alt="Brushed aluminium"
              className="object-contain"
            />
            <p className="mt-2 text-base font-bold">Brushed aluminium</p>
          </div>
          <div className="flex basis-1/3 flex-col items-center justify-center">
            <Image
              src="/images/Walnut.jpg"
              width="320"
              height="230"
              alt="Walnut"
              className="object-contain"
            />
            <p className="mt-2 text-base font-bold">Walnut</p>
          </div>
        </div>
        <div className="mt-6 flex flex-col items-center justify-between gap-2 sm:flex-row">
          <div className="flex basis-1/3 flex-col items-center justify-center">
            <Image
              src="/images/Alux_white_aluminium.jpg"
              width="320"
              height="230"
              alt="Alux white aluminium"
              className="object-contain"
            />
            <p className="mt-2 text-base font-bold">Alux white aluminium</p>
          </div>
          <div className="flex basis-1/3 flex-col items-center justify-center">
            <Image
              src="/images/Bronze_platinum.jpg"
              width="320"
              height="230"
              alt="Bronze platinum"
              className="object-contain"
            />
            <p className="mt-2 text-base font-bold">Bronze platinum</p>
          </div>
          <div className="flex basis-1/3 flex-col items-center justify-center">
            <Image
              src="/images/Dark_grey_SFTN.jpg"
              width="320"
              height="230"
              alt="Dark grey SFTN"
              className="object-contain"
            />
            <p className="mt-2 text-base font-bold">Dark grey SFTN</p>
          </div>
        </div>
        <div className="mt-6 flex flex-col items-center justify-between gap-2 sm:flex-row">
          <div className="flex basis-1/3 flex-col items-center justify-center">
            <Image
              src="/images/Sapeli.jpg"
              width="320"
              height="230"
              alt="Sapeli"
              className="object-contain"
            />
            <p className="mt-2 text-base font-bold">Sapeli</p>
          </div>
          <div className="flex basis-1/3 flex-col items-center justify-center">
            <Image
              src="/images/Golden-brown_oak.jpg"
              width="320"
              height="230"
              alt="Golden-brown oak"
              className="object-contain"
            />
            <p className="mt-2 text-base font-bold">Golden-brown oak</p>
          </div>
          <div className="flex basis-1/3 flex-col items-center justify-center">
            <Image
              src="/images/Ash_C35.jpg"
              width="320"
              height="230"
              alt="Ash C35"
              className="object-contain"
            />
            <p className="mt-2 text-base font-bold">Ash C35</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Gallery;
