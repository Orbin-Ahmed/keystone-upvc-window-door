"use client";
import { UseTranslation } from "@/app/i18n";
import ColumnCard from "@/components/Cards/ColumnCard";
import EstimateButton from "@/components/CustomButton/EstimateButton";
import React, { useEffect, useState } from "react";

type BonusSectionProps = {
  lng: string;
};

const BonusSection = ({ lng }: BonusSectionProps) => {
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
            <span className="text-primary-color">{t("Keystone uPVC?")}</span>
          </p>
          <p className="mb-4 mt-6 text-center text-sm font-bold opacity-70 md:text-base">
            {t(
              "When you choose to receive a quote from us, here's what you can expect:",
            )}
          </p>
        </div>
        <div className="flex flex-col">
          <div className="mb-16">
            <ColumnCard
              flipFlag={false}
              image="/images/Rectangle 16.svg"
              description={t(
                "We will provide you with suitable uPVC windows and doors from the German company Schüco. Schüco offers profiles, reinforcement steel, opening and closing systems, and accessories, ensuring quality, innovation, and durability.",
              )}
            />
          </div>
          <div className="mb-16">
            <ColumnCard
              flipFlag={true}
              image="/images/Rectangle 17.svg"
              description={t(
                "Our engineers will design windows and doors while considering the architectural aspects and interior designs of your dream home. We will present you with detailed plans and several options, giving you the freedom to design your home down to the finest details.",
              )}
            />
          </div>
          <div className="mb-16">
            <ColumnCard
              flipFlag={false}
              image="/images/explain.svg"
              description={t(
                "We will show you all the components of our products, allowing you to see how these elements surpass their German counterparts.",
              )}
            />
          </div>
          <div className="mb-16">
            <ColumnCard
              flipFlag={true}
              image="/images/Rectangle 17 (1).svg"
              description={t(
                "We will take you on a tour of our factory, where you can see the quality standards in the manufacturing of our products and the competence of our teams.",
              )}
            />
          </div>
        </div>
        <div className="mt-8 flex flex-col items-center justify-center text-xs 2xs:text-sm md:mt-16 2md:text-base">
          <EstimateButton lng={lng} />
        </div>
      </div>
    </div>
  );
};

export default BonusSection;
