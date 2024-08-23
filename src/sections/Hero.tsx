import CustomButton from "@/components/CustomButton";
import EstimateButton from "@/components/CustomButton/EstimateButton";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { UseTranslation } from "@/app/i18n";

type HeroProps = {
  lng: string;
};

const Hero = ({ lng }: HeroProps) => {
  const [t, setT] = useState(() => (key: string) => key);

  useEffect(() => {
    const fetchTranslations = async () => {
      const { t: translation } = await UseTranslation(lng);
      setT(() => translation);
    };

    fetchTranslations();
  }, [lng]);

  return (
    <div className="m-8 lg:m-4">
      <div className="mx-auto w-full lg:w-4/5">
        <div className="mt-4 flex flex-col items-center justify-between gap-4 sm:flex-row">
          <div className="flex basis-1/2 flex-col items-center justify-center">
            <div className="w-full text-left">
              <p className="caveat-font text-animation text-sm font-bold 2md:text-base xl:text-2xl">
                {t(
                  "Looking for a Dust-Free, Quiet, Cool, and Elegant Home Interior?",
                )}
              </p>
              <p className="mt-4 text-sm font-extrabold 2md:text-base xl:text-2xl">
                {t("Discover")}{" "}
                <span className="text-base 2md:text-2xl xl:text-4xl">
                  {t("Keystone uPVC&rsquo;s")}
                </span>{" "}
                <br />
                {t("Premium uPVC Windows and Doors Solutions.")}
              </p>
              <p className="mt-4 text-sm font-semibold 2md:text-base xl:text-2xl">
                {t(
                  "Achieve Your Dream Home Environment by Leveraging Our Expertise in German-Engineered uPVC Windows and Doors.",
                )}
              </p>
            </div>
          </div>
          <div className="flex basis-1/2 justify-center">
            <Image
              src="/images/hero_image.png"
              alt="Emirati"
              width={500}
              height={500}
              className="object-contain"
            />
          </div>
        </div>
        <div className="mt-8 flex flex-col items-center justify-center text-xs 2xs:text-sm md:mt-16 2md:text-base">
          <EstimateButton lng={lng} />
        </div>
        {/* Green Tick Text Area Start */}
        <div className="mt-6 flex flex-col items-center justify-center gap-4 md:mt-12 md:flex-row">
          <div className="flex basis-2/3 items-center justify-between gap-4 md:justify-around">
            <div className="flex items-center justify-center">
              <Image
                src="/icons/green_tick.svg"
                alt="tick"
                width={24}
                height={18}
                className="object-contain"
              />
              <p className="text-sm lg:text-lg">
                {t("Enjoy a Sand and Dust-Free Environment")}
              </p>
            </div>
            <div className="flex items-center justify-center">
              <Image
                src="/icons/green_tick.svg"
                alt="tick"
                width={24}
                height={18}
                className="object-contain"
              />
              <p className="text-sm lg:text-lg">
                {t("Benefit from Superior Thermal and Heat Insulation")}
              </p>
            </div>
          </div>
          <div className="flex basis-1/3 items-center justify-center">
            <Image
              src="/icons/green_tick.svg"
              alt="tick"
              width={24}
              height={18}
              className="object-contain"
            />
            <p className="text-sm lg:text-lg">
              {t("Experience Waterproof and Airtight Protection")}
            </p>
          </div>
        </div>
        <div className="mt-4 flex items-center justify-center gap-4 md:mt-6">
          <div className="flex basis-1/2 items-center justify-center lg:basis-1/3">
            <Image
              src="/icons/green_tick.svg"
              alt="tick"
              width={24}
              height={18}
              className="object-contain"
            />
            <p className="text-sm lg:text-lg">
              {t("Near to Zero Maintainence")}
            </p>
          </div>
          <div className="flex basis-1/2 items-center justify-center lg:basis-1/3">
            <Image
              src="/icons/green_tick.svg"
              alt="tick"
              width={24}
              height={18}
              className="object-contain"
            />
            <p className="text-sm lg:text-lg">
              {t("Exceptional Noise Reduction Capabilities")}
            </p>
          </div>
        </div>
        {/* Green Tick Text Area End */}
      </div>
    </div>
  );
};

export default Hero;
