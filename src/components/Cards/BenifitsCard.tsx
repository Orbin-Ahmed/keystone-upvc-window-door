import Image from "next/image";
import React from "react";
import EstimateButton from "../CustomButton/EstimateButton";

type BenifitsCardProps = {
  title: string;
  subTitle: string;
  subTitle2?: string;
  caveatText: string;
  image: string;
  flipFlag: boolean;
};

const BenifitsCard = ({
  title,
  subTitle,
  caveatText,
  subTitle2,
  image,
  flipFlag,
}: BenifitsCardProps) => {
  return (
    <div className="mx-8 mt-16 flex flex-col items-center justify-center gap-4 rounded-2xl bg-white px-12 py-6 shadow-lg shadow-gray-500/40 md:flex-row xl:mx-24">
      {!flipFlag ? (
        <>
          <div className="flex basis-1/2 flex-col items-start justify-center">
            <p className="text-primary-hover text-lg font-extrabold lg:text-xl">
              uPVC Windows Are…
            </p>
            <p className="text-2xl font-extrabold lg:text-4xl">{title}</p>
            <p className="mt-8 text-base font-medium lg:text-xl">{subTitle}</p>
            {subTitle2 && (
              <p className="mt-8 text-base font-medium lg:text-xl">
                {subTitle2}
              </p>
            )}
            <p className="caveat-font mt-4 text-3xl font-bold lg:text-4xl">
              {caveatText}
            </p>
          </div>
          <div className="flex basis-1/2 flex-col items-center justify-center">
            <Image
              src={image}
              alt="window"
              width={600}
              height={430}
              className="object-contain"
            />
            <div className="mt-4 flex flex-col items-center justify-center text-xs 2xs:text-sm md:mt-8 2md:text-base">
              <EstimateButton />
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="flex basis-1/2 flex-col items-center justify-center">
            <Image
              src={image}
              alt="window"
              width={600}
              height={430}
              className="object-contain"
            />
            <div className="mt-4 flex flex-col items-center justify-center text-xs 2xs:text-sm md:mt-8 2md:text-base">
              <EstimateButton />
            </div>
          </div>
          <div className="flex basis-1/2 flex-col items-start justify-center">
            <p className="text-primary-hover text-lg font-extrabold lg:text-xl">
              uPVC Windows Are…
            </p>
            <p className="text-2xl font-extrabold lg:text-4xl">{title}</p>
            <p className="mt-8 text-base font-medium lg:text-xl">{subTitle}</p>
            {subTitle2 && (
              <p className="mt-8 text-base font-medium lg:text-xl">
                {subTitle2}
              </p>
            )}
            <p className="caveat-font mt-4 text-3xl font-bold lg:text-4xl">
              {caveatText}
            </p>
          </div>
        </>
      )}
    </div>
  );
};

export default BenifitsCard;
