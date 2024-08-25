import React, { useEffect, useState } from "react";
import Image from "next/image";
import { UseTranslation } from "@/app/i18n";

type SlideShowProps = {
  images: string[];
  lng: string;
};

const SlideShow: React.FC<SlideShowProps> = ({ images, lng }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [t, setT] = useState(() => (key: string) => key);

  useEffect(() => {
    const fetchTranslations = async () => {
      const { t: translation } = await UseTranslation(lng);
      setT(() => translation);
    };

    fetchTranslations();
  }, [lng]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1,
      );
    }, 3000);

    return () => clearInterval(intervalId);
  }, [images.length]);

  return (
    <div className="relative h-[500px] w-full overflow-hidden">
      {images.map((image, index) => (
        <div
          key={index}
          className={`absolute left-0 top-0 h-full w-full transition-opacity duration-1000 ${
            index === currentIndex ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={image}
            alt={`Slide ${index + 1}`}
            layout="fill"
            objectFit="cover"
            priority
          />
        </div>
      ))}
      <div className="absolute inset-0 flex items-center justify-center">
        <h2 className="text-4xl font-extrabold md:text-6xl">
          {t("Product Gallery")}
        </h2>
      </div>
    </div>
  );
};

export default SlideShow;
