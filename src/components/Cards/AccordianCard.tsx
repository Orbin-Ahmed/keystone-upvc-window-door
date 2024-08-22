import React from "react";
import Head from "next/head";

type AccordianCardProps = {
  text: string;
  points: string;
};

const AccordianCard = ({ text, points }: AccordianCardProps) => {
  return (
    <>
      <div className="relative mt-16 flex flex-col items-start">
        <div className="flex w-full items-center justify-center gap-2 rounded-xl bg-white p-6 shadow-lg sm:p-8 lg:p-12">
          <p className="relative text-base font-semibold sm:text-lg lg:text-2xl">
            {text}
          </p>
        </div>
        <div className="absolute left-6 top-[-45px] rounded-xl bg-[#c2d605] p-4 text-xl font-semibold sm:text-3xl lg:text-5xl lg:font-extrabold">
          {points}.
        </div>
      </div>
    </>
  );
};

export default AccordianCard;
