import Image from "next/image";
import React from "react";

type GridCardProps = {
  title: string;
  subTitle: string;
  image: string;
  boldText?: string;
};

const GridCard = ({ title, subTitle, boldText, image }: GridCardProps) => {
  return (
    <div className="rounded-3xl bg-white p-8 shadow-lg shadow-gray-500/40">
      <div className="mb-4 flex items-center justify-start text-xl font-extrabold">
        <Image
          src="/icons/green_circle.svg"
          alt="CT Profiles"
          width={44}
          height={44}
          className="object-contain"
        />
        <span className="ml-2">{title}</span>
      </div>
      <Image
        src={image}
        alt="CT Profile"
        width={466}
        height={327}
        className="mx-auto object-contain"
      />
      <div className="mt-4 text-justify text-lg font-medium">
        {subTitle}
        {boldText && <p className="mt-8 text-xl font-bold">{boldText}</p>}
      </div>
    </div>
  );
};

export default GridCard;
