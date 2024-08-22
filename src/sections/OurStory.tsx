"use client";
import EstimateButton from "@/components/CustomButton/EstimateButton";
import Image from "next/image";
import React, { useState } from "react";

type OurStoryProps = {
  lng: string;
};

const OurStory = ({ lng }: OurStoryProps) => {
  const [t, setT] = useState(() => (key: string) => key);
  return (
    <div className="bg-gradient-to-bl from-background-gradient-color-1 from-[7.51%] to-background-primary to-[64.29%] px-8 pb-16 pt-8 lg:px-4 lg:pt-4">
      <div className="mx-auto w-full lg:w-4/5">
        {/* Service guaranty area Start */}
        <div className="mt-8 grid grid-cols-1 gap-8 rounded-md bg-white p-8 text-center 2xs:grid-cols-2 md:grid-cols-3 xl:grid-cols-6">
          <div className="flex flex-col items-center">
            <Image
              src="/icons/Guarantee.svg"
              alt="tick"
              width={96}
              height={96}
              className="object-contain"
            />
            <p className="text-sm lg:text-lg">Premium Schuco Profiles</p>
          </div>
          <div className="flex flex-col items-center">
            <Image
              src="/icons/Design services.svg"
              alt="tick"
              width={96}
              height={96}
              className="object-contain"
            />
            <p className="text-sm lg:text-lg">Customizable Design Options</p>
          </div>
          <div className="flex flex-col items-center">
            <Image
              src="/icons/Shield.svg"
              alt="tick"
              width={96}
              height={96}
              className="object-contain"
            />
            <p className="text-sm lg:text-lg">
              High-Performance Sealing Systems
            </p>
          </div>
          <div className="flex flex-col items-center">
            <Image
              src="/icons/lock.svg"
              alt="tick"
              width={96}
              height={96}
              className="object-contain"
            />
            <p className="text-sm lg:text-lg">Secure Locking Mechanisms</p>
          </div>
          <div className="flex flex-col items-center">
            <Image
              src="/icons/light.svg"
              alt="tick"
              width={96}
              height={96}
              className="object-contain"
            />
            <p className="text-sm lg:text-lg">Energy Efficiency & Savings</p>
          </div>
          <div className="flex flex-col items-center">
            <Image
              src="/icons/lock_time.svg"
              alt="tick"
              width={96}
              height={96}
              className="object-contain"
            />
            <p className="text-sm lg:text-lg">
              Enhanced Durability & Longevity
            </p>
          </div>
        </div>
        {/* Service guaranty area End */}
        {/* Story Area */}
        <div className="mt-12 md:mt-24">
          <p className="mb-6 text-center text-5xl font-extrabold">Our Story</p>
          <p className="mb-4 text-justify text-base font-semibold">
            In the early 1990s, the inception of our company was rooted in a
            personal experience. The founder, while selecting windows for his
            first home, was not guided by quality standards or specifications.
            This led to a series of issues, including poor insulation against
            heat, dust, and noise. The shortcomings of these windows were felt
            deeply by the founder and his family.
          </p>
          <p className="mb-4 text-justify text-base font-semibold">
            Fast forward to 2010, while planning his second villa, the founder
            made a pivotal decision. He chose German uPVC windows and doors over
            the typical aluminum windows. This choice was not only aesthetically
            pleasing, adding a touch of elegance to the villa, but it also
            significantly improved the comfort of the home. The insulation
            quality of these German uPVC windows and doors far surpassed that of
            the locally made aluminum or uPVC counterparts.
          </p>
          <p className="mb-8 text-justify text-base font-semibold md:mb-12">
            Inspired by his personal journey and the transformation he
            experienced, the founder took a leap in 2019. He established
            Keystone uPVC windows with a clear objective in mind - to provide
            his fellow citizens with superior quality windows and doors. His
            mission was to answer a crucial question that arises when building a
            dream home:
          </p>
          <p className="mb-8 text-center text-3xl font-bold md:mb-12">
            "How can I make the interiors of my home dust-free, quiet, cool, and
            elegant?"
          </p>
          <p className="mb-8 text-justify text-base font-semibold">
            This question is not just about aesthetics or comfort. It's about
            creating a nurturing environment where our children can grow, and
            where families can spend quality time together. The importance of
            choosing the right windows is a key step in achieving this goal.
          </p>
          <p className="caveat-font text-center text-3xl font-bold">
            If you're visiting our website, it means you share this goal. You're
            on the right track to achieving it. Let us guide you in choosing the
            best windows and doors for your home.
            <br />
            Here&rsquo;s how:
          </p>
          <ul className="mt-8 flex list-decimal flex-col items-start pl-6 text-left">
            <li className="mb-4 text-base font-semibold md:text-lg xl:text-2xl">
              Opt for uPVC Windows Over Aluminum for Improved Performance and
              Aesthetics.
            </li>
            <li className="mb-4 text-base font-semibold md:text-lg xl:text-2xl">
              Choose Only the Finest German Brands Crafting High-Quality uPVC
              Windows.
            </li>
            <li className="mb-4 text-base font-semibold md:text-lg xl:text-2xl">
              Master the Art of Evaluating Proposals from uPVC Fabricators and
              Identifying the Best Brands in the Market.
            </li>
          </ul>
          <div className="mt-8 flex flex-col items-center justify-center text-xs 2xs:text-sm md:mt-16 2md:text-base">
            <EstimateButton />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurStory;
