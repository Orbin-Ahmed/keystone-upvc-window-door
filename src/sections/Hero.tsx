import CustomButton from "@/components/CustomButton";
import Image from "next/image";
import React from "react";
import KeyboardDoubleArrowRightSharpIcon from "@mui/icons-material/KeyboardDoubleArrowRightSharp";

type HeroProps = {};

const Hero = ({}: HeroProps) => {
  return (
    <div className="m-8 lg:m-4">
      <div className="mx-auto w-full lg:w-4/5">
        <div className="mt-4 flex flex-col items-center justify-between gap-4 sm:flex-row">
          <div className="flex basis-1/2 flex-col items-center justify-center">
            <div className="w-full text-left">
              <p className="caveat-font text-animation text-sm font-bold 2md:text-base xl:text-2xl">
                Looking for a Dust-Free, Quiet, Cool, and Elegant Home Interior?
              </p>
              <p className="mt-4 text-sm font-extrabold 2md:text-base xl:text-2xl">
                Discover{" "}
                <span className="text-base 2md:text-2xl xl:text-4xl">
                  Keystone uPVC&rsquo;s
                </span>{" "}
                <br />
                Premium uPVC Windows and Doors Solutions.
              </p>
              <p className="mt-4 text-sm font-semibold 2md:text-base xl:text-2xl">
                Achieve Your Dream Home Environment by Leveraging Our Expertise
                in German-Engineered uPVC Windows and Doors.
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
          <CustomButton className="flex items-center justify-center py-4">
            Request Your Free Estimate Today{" "}
            <KeyboardDoubleArrowRightSharpIcon />
          </CustomButton>
          <p className="mt-4 text-secondary-text">
            No Obligations • Hassle-Free Experience
          </p>
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
                Enjoy a Sand and Dust-Free Environment
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
                Benefit from Superior Thermal and Heat Insulation
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
              Experience Waterproof and Airtight Protection
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
            <p className="text-sm lg:text-lg">Near to Zero Maintainence</p>
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
              Exceptional Noise Reduction Capabilities
            </p>
          </div>
        </div>
        {/* Green Tick Text Area End */}
        {/* Service guaranty area  */}
        <div className="mt-8 flex items-center justify-center gap-2 rounded-md bg-white p-8 text-center">
          <div className="justify-centerbasis-1/6 flex flex-col items-center">
            <Image
              src="/icons/Guarantee.svg"
              alt="tick"
              width={96}
              height={96}
              className="object-contain"
            />
            <p className="text-sm lg:text-lg">Premium Schuco Profiles</p>
          </div>
          <div className="justify-centerbasis-1/6 flex flex-col items-center">
            <Image
              src="/icons/Design services.svg"
              alt="tick"
              width={96}
              height={96}
              className="object-contain"
            />
            <p className="text-sm lg:text-lg">Premium Schuco Profiles</p>
          </div>
          <div className="justify-centerbasis-1/6 flex flex-col items-center">
            <Image
              src="/icons/Shield.svg"
              alt="tick"
              width={96}
              height={96}
              className="object-contain"
            />
            <p className="text-sm lg:text-lg">Premium Schuco Profiles</p>
          </div>
          <div className="justify-centerbasis-1/6 flex flex-col items-center">
            <Image
              src="/icons/lock.svg"
              alt="tick"
              width={96}
              height={96}
              className="object-contain"
            />
            <p className="text-sm lg:text-lg">Premium Schuco Profiles</p>
          </div>
          <div className="justify-centerbasis-1/6 flex flex-col items-center">
            <Image
              src="/icons/light.svg"
              alt="tick"
              width={96}
              height={96}
              className="object-contain"
            />
            <p className="text-sm lg:text-lg">Premium Schuco Profiles</p>
          </div>
          <div className="justify-centerbasis-1/6 flex flex-col items-center">
            <Image
              src="/icons/lock_time.svg"
              alt="tick"
              width={96}
              height={96}
              className="object-contain"
            />
            <p className="text-sm lg:text-lg">Premium Schuco Profiles</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
