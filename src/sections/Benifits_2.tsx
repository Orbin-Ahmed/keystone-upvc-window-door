"use client";
import GridCard from "@/components/Cards/GridCard";
import EstimateButton from "@/components/CustomButton/EstimateButton";
import Image from "next/image";
import React, { useState } from "react";

type Benefits2Props = {
  lng: string;
};

const Benifits_2 = ({ lng }: Benefits2Props) => {
  const [t, setT] = useState(() => (key: string) => key);

  return (
    <div className="bg-gradient-to-bl from-background-gradient-color-1 from-[7.51%] to-background-primary to-[64.29%] py-16">
      <div className="mx-auto max-w-screen-xl">
        <p className="mb-4 text-center text-sm font-medium md:text-base">
          Selecting the Ideal Window Solution for Your Home
        </p>
        <p className="caveat-font mb-4 text-center text-3xl font-bold md:text-4xl">
          Not any uPVC
        </p>
        <div className="flex flex-col items-center justify-center">
          <p className="w-full text-center text-2xl font-extrabold md:text-3xl lg:w-4/5 lg:text-4xl">
            2. Choose only the best German brands
            <br /> making uPVC windows.
          </p>
          <p className="caveat-font mt-8 w-4/5 text-center text-3xl font-bold">
            Choosing the best quality German uPVC windows and doors starts with
            understanding the criteria for your selection.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-12 px-12 lg:grid-cols-2 xl:px-2">
          {/* Profile Section */}
          <GridCard
            title="PROFILE"
            subTitle="Make sure to select windows with profiles extruded in Germany from a
        special hot country compound and designed with 5 chambers to withstand
        the extreme weather conditions of the Gulf countries while maintaining
        its aesthetic nature."
            boldText="Only the profiles made in Germany have these characteristics."
            image="/images/CT70 1.png"
          />

          {/* Hardware Section */}
          <GridCard
            image="/images/CT70 2.png"
            title="STEEL"
            subTitle="The strong, corrosion-protected steel profiles in the window frame and vents ensure stability, reliability, and longevity. Also, all the fittings are anchored securely and permanently in the steel reinforcement on all sides."
          />

          {/* Steel Section */}
          <GridCard
            image="/images/CT70 3.png"
            title="HARDWARE"
            subTitle="The hardware system must provide the best-in-class security and insulation for the windows. The hardware should give a wide variety of customization options for you, while keeping the windows looking sleek and modern."
          />

          {/* Accessories Section */}
          <GridCard
            image="/images/CT70 4.png"
            title="ACCESSORIES"
            subTitle="Window accessories should allow you to create individual design accents. You should be able to choose from a wide variety of accessory options to suit your vision, be it clean, linear design, or colorful accents."
          />
        </div>
      </div>
      <div className="mt-8 flex flex-col items-center justify-center text-xs 2xs:text-sm md:mt-16 2md:text-base">
        <EstimateButton />
      </div>
    </div>
  );
};

export default Benifits_2;
