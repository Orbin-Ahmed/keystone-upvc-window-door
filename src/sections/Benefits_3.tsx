"use client";
import { UseTranslation } from "@/app/i18n";
import AccordianCard from "@/components/Cards/AccordianCard";
import EstimateButton from "@/components/CustomButton/EstimateButton";
import React, { useEffect, useState } from "react";

type Benifits3Props = {
  lng: string;
};

const Benefits_3 = ({ lng }: Benifits3Props) => {
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
        <p className="mb-4 text-center text-sm font-medium md:text-base">
          {t("Selecting the Ideal Window Solution for Your Home")}
        </p>
        <div className="flex flex-col items-center justify-center">
          <p className="w-full text-center text-2xl font-extrabold md:text-3xl lg:w-4/5 lg:text-4xl">
            {t(
              "3. Know how to evaluate proposals from uPVC windows fabricators offering German brands and how to identify the best brand.",
            )}
          </p>
          <p className="caveat-font mt-8 w-4/5 text-center text-3xl font-bold">
            {t("Here You Go....")}
          </p>
        </div>
        <div className="mx-2 mt-12 flex flex-col">
          <AccordianCard
            text={t(
              "Go only for trusted German brands who offer durable, energy-efficient, and stylish products.",
            )}
            points="1"
          />
          <AccordianCard
            text={t(
              "Make sure that the uPVC window entire system including the profiles, steel, hardware, accessories and EPDM gaskets are designed and manufactured by the same German supplier.",
            )}
            points="2"
          />
          <AccordianCard
            text={t(
              "Make sure that the steel offered for the windows enforcement have the thickness that is appropriate for the size and use of the window or door and it covers the full profile length.",
            )}
            points="3"
          />
          <AccordianCard
            text={t(
              "Make sure that the glass used in the uPVC windows is high-performance, featuring a low U-value to match the thermal and insulation properties of the window system.",
            )}
            points="4"
          />
          <AccordianCard
            text={t(
              "The fabricator must have the capability and flexibility to align with your external and interiors design of your dream home.",
            )}
            points="5"
          />
          <AccordianCard
            text={t(
              "You should always ask for detailed design drawings to confirm that the fabricator has selected the right profile, steel thickness, hardware, and accessories for your uPVC windows and doors. And all these components are made in Germany, only then you can guarantee that you are getting the right value for your money.",
            )}
            points="6"
          />
          <AccordianCard
            text={t(
              "Also make sure that the detailed design drawings include the specifications of the glass stating the U value, thickness, and origin of the glass.",
            )}
            points="7"
          />
          <AccordianCard
            text={t(
              "The fabricator must offer the best workmanship quality through trained professionals using the German machinery for making the highest quality uPVC windows and doors.",
            )}
            points="8"
          />
        </div>
      </div>
      <div className="mt-8 flex flex-col items-center justify-center text-xs 2xs:text-sm md:mt-16 2md:text-base">
        <EstimateButton lng={lng} />
      </div>
    </div>
  );
};

export default Benefits_3;
