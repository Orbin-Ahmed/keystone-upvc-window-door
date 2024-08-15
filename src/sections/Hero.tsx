import Image from "next/image";
import React from "react";

type HeroProps = {};

const Hero = ({}: HeroProps) => {
  return (
    <>
      <div className="flex items-center justify-between gap-4 sm:flex-row flex-col mt-4">
        <div className="basis-1/2 flex flex-col items-center justify-center">
          <div className="w-full text-left">
            <p className="caveat-font font-bold xl:text-2xl 2md:text-base text-sm text-animation">
              Looking for a Dust-Free, Quiet, Cool, and Elegant Home Interior?
            </p>
            <p className="xl:text-2xl font-extrabold mt-4 2md:text-base text-sm">
              Discover{" "}
              <span className="xl:text-4xl 2md:text-2xl text-base">
                Keystone uPVC&rsquo;s
              </span>{" "}
              <br />
              Premium uPVC Windows and Doors Solutions.
            </p>
            <p className="xl:text-2xl font-semibold mt-4 2md:text-base text-sm">
              Achieve Your Dream Home Environment by Leveraging Our Expertise in
              German-Engineered uPVC Windows and Doors.
            </p>
          </div>
        </div>
        <div className="basis-1/2 flex justify-center">
          <Image
            src="/images/hero_image.png"
            alt="Emirati"
            width={500}
            height={500}
            className="object-contain"
          />
        </div>
      </div>
    </>
  );
};

export default Hero;
