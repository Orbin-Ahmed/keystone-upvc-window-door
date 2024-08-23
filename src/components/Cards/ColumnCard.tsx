"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";

type ColumnCardProps = {
  image: string;
  description: string;
  flipFlag: boolean;
};

const ColumnCard = ({ image, description, flipFlag }: ColumnCardProps) => {
  const [isScreenLarge, setIsScreenLarge] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 640px)");
    setIsScreenLarge(mediaQuery.matches);
    const handleScreenChange = (e: MediaQueryListEvent) => {
      setIsScreenLarge(e.matches);
    };
    mediaQuery.addEventListener("change", handleScreenChange);
    return () => {
      mediaQuery.removeEventListener("change", handleScreenChange);
    };
  }, []);

  return (
    <>
      {!flipFlag ? (
        <div className="mt-8 flex h-72 flex-col items-center justify-between rounded-2xl bg-transparent p-4 sm:h-56 sm:flex-row sm:bg-white lg:mt-24">
          <Image
            src={image}
            width={280}
            height={300}
            alt="window"
            className="relative bottom-0 left-0 mb-4 basis-1/4 object-contain sm:bottom-[80px] sm:mb-0"
          />
          <p className="flex basis-3/4 items-center text-sm font-semibold sm:text-lg lg:text-2xl">
            {description}
          </p>
        </div>
      ) : (
        <div className="mt-8 flex h-72 flex-col items-center justify-between rounded-2xl bg-transparent p-4 sm:h-56 sm:flex-row sm:bg-white lg:mt-24">
          {isScreenLarge ? (
            <>
              <p className="flex basis-3/4 items-center text-sm font-semibold sm:text-lg lg:text-2xl">
                {description}
              </p>
              <Image
                src={image}
                width={280}
                height={300}
                alt="window"
                className="relative bottom-0 left-0 mb-4 basis-1/4 object-contain sm:bottom-[80px] sm:mb-0"
              />
            </>
          ) : (
            <>
              <Image
                src={image}
                width={280}
                height={300}
                alt="window"
                className="relative bottom-0 left-0 mb-4 basis-1/4 object-contain sm:bottom-[80px] sm:mb-0"
              />
              <p className="flex basis-3/4 items-center text-sm font-semibold sm:text-lg lg:text-2xl">
                {description}
              </p>
            </>
          )}
        </div>
      )}
    </>
  );
};

export default ColumnCard;
