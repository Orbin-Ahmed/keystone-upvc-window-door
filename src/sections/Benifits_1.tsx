"use client";
import BenifitsCard from "@/components/Cards/BenifitsCard";
import Image from "next/image";
import React, { useState } from "react";

type BenefitsProps = {
  lng: string;
};

const Benifits_1 = ({ lng }: BenefitsProps) => {
  const [t, setT] = useState(() => (key: string) => key);

  return (
    <div className="bg-gradient-to-bl from-background-gradient-color-1 from-[7.51%] to-background-primary to-[64.29%] py-16">
      <p className="mb-4 text-center text-sm font-medium md:text-base">
        Selecting the Ideal Window Solution for Your Home
      </p>
      <div className="flex flex-col items-center justify-center">
        <p className="w-full text-center text-2xl font-extrabold md:text-3xl lg:w-4/5 lg:text-4xl">
          1. Opt for uPVC Windows Over Aluminum for <br /> Improved Performance
          and Aesthetics.
        </p>
        <p className="font-base mt-8 w-4/5 text-center font-semibold">
          When selecting windows for your new home, it's important to consider
          the materials used in their construction. One popular choice is uPVC
          windows, which offer several advantages over traditional aluminum
          windows. Here are some reasons why you should choose uPVC windows
          instead of aluminum:
        </p>
        <Image
          src="/images/down_arrow_group.png"
          alt="Arrow"
          width={320}
          height={70}
          className="mt-8 object-contain"
        />
      </div>
      <BenifitsCard
        flipFlag={false}
        title="the Best for Home Insulation"
        subTitle="Energy efficiency is crucial in today's world. By choosing the right
          uPVC windows, you can significantly improve your home's insulation,
          leading to reduced heat transfer and enhanced energy efficiency"
        caveatText="Enjoy a more comfortable living environment while potentially saving
          money on energy bills"
        image="/images/window.png"
      />
      <BenifitsCard
        flipFlag={true}
        title="Your Noise Reduction Solution"
        subTitle="uPVC windows offer excellent soundproofing properties, helping to reduce outside noise and create a tranquil indoor environment especially if you live near a busy road or in an area with high levels of noise pollution."
        caveatText="A peaceful and quiet home is essential for relaxation and well-being"
        image="/images/image 2.png"
      />
      <BenifitsCard
        flipFlag={false}
        title="Your Low Maintenance Solution"
        subTitle="Reducing the time and effort spent on maintaining your windows is a great advantage. uPVC windows offer minimal maintenance requirements compared to aluminum windows, making them a smart and convenient choice for homeowners."
        caveatText="Easily keep your windows looking new with just a simple wipe down using a damp cloth"
        image="/images/image 3.png"
      />
      <BenifitsCard
        flipFlag={true}
        title="Your Durable Window Solution"
        subTitle="Durability is an essential factor when choosing windows for your home. uPVC windows are highly durable and long-lasting, making them a reliable and low-maintenance option for homeowners who value longevity and dependability"
        subTitle2="Benefit from highly durable and long-lasting windows that withstand the test of time. Enjoy resistance to harsh weather conditions and extreme temperatures without warping or deterioration"
        caveatText="Choose a reliable and low-maintenance window option for your home, offering peace of mind and long-term value"
        image="/images/image 3.png"
      />
    </div>
  );
};

export default Benifits_1;
