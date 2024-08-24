"use client";
import { UseTranslation } from "@/app/i18n";
import EstimateButton from "@/components/CustomButton/EstimateButton";
import Image from "next/image";
import React, { useEffect, useState } from "react";

type FourReasonsProps = {
  lng: string;
};

const FourReasons = ({ lng }: FourReasonsProps) => {
  const [t, setT] = useState(() => (key: string) => key);

  useEffect(() => {
    const fetchTranslations = async () => {
      const { t: translation } = await UseTranslation(lng);
      setT(() => translation);
    };

    fetchTranslations();
  }, [lng]);

  return (
    <div className="bg-gradient-to-bl from-background-gradient-color-1 from-[7.51%] to-background-primary to-[64.29%] py-16">
      <div className="mx-auto max-w-screen-xl">
        <div className="mx-2 flex flex-col items-center justify-center">
          <p className="w-full text-center text-2xl font-extrabold md:text-3xl lg:w-4/5 lg:text-4xl">
            {t("Why Choose ")}
            <span className="text-primary-color">{t("Schüco?")}</span>
          </p>
          <p className="caveat-font mt-8 w-4/5 text-center text-3xl font-bold">
            {t(
              "By choosing Schüco you are getting everything from a single source",
            )}
          </p>
          <p className="mb-4 mt-6 text-center text-sm font-bold md:text-base">
            {t(
              "With windows, doors and sliding doors from Schüco, you have the freedom to design your home down to the last detail, whether it is a new build or a renovation or refurbishment project. Our products which includes the profile (Special hot country compound), steel, hardware and accessories offer quality, innovation and durability.",
            )}
          </p>
          <Image
            src="/images/fourReason.svg"
            alt="window"
            width={1000}
            height={500}
            className="mt-12 object-contain"
          />
          <p className="mt-16 text-2xl font-bold md:text-4xl">
            {t("4 Great Reasons")}
          </p>
          <p className="mt-4 text-lg opacity-70 md:text-2xl">
            {t("to choose Schüco windows, doors and sliding doors")}
          </p>
          <div className="flex items-center justify-center">
            <div className="basis-1/4">
              <Image
                src="/images/group_37.svg"
                alt="window"
                width={250}
                height={200}
                className="mt-12 object-contain"
              />
            </div>
            <div className="basis-1/4">
              <Image
                src="/images/group_40.svg"
                alt="window"
                width={250}
                height={200}
                className="mt-12 object-contain"
              />
            </div>
            <div className="basis-1/4">
              <Image
                src="/images/group_38.svg"
                alt="window"
                width={250}
                height={200}
                className="mt-12 object-contain"
              />
            </div>
            <div className="basis-1/4">
              <Image
                src="/images/group_39.svg"
                alt="window"
                width={250}
                height={200}
                className="mt-12 object-contain"
              />
            </div>
          </div>
          <div className="mt-16 flex flex-col items-center justify-center text-xs 2xs:text-sm md:mt-32 2md:text-base">
            <EstimateButton lng={lng} />
          </div>
          <p className="caveat-font mt-16 w-4/5 text-center text-2xl font-bold md:text-3xl">
            {t("Know more about the products")}
          </p>
          <div className="mt-8 flex flex-col items-center justify-between sm:flex-row">
            <div className="basis-1/4">
              <Image
                src="/images/group_43.svg"
                alt="window"
                width={280}
                height={340}
                className="mb-4 object-contain"
              />
            </div>
            <div className="basis-1/4">
              <Image
                src="/images/group_44.svg"
                alt="window"
                width={280}
                height={340}
                className="mb-4 object-contain"
              />
            </div>
            <div className="basis-1/4">
              <Image
                src="/images/group_45.svg"
                alt="window"
                width={280}
                height={340}
                className="mb-4 object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FourReasons;
