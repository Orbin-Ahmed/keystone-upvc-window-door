import Image from "next/image";
import React from "react";

type Props = {};

const Benifits_2 = (props: Props) => {
  return (
    <div className="w-full bg-gradient-to-bl from-[#E2EDFb] to-transparent py-8">
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

        <div className="mt-16 grid grid-cols-1 gap-12 lg:grid-cols-2">
          {/* Profile Section */}
          <div className="relative rounded-3xl bg-white p-8 shadow-lg">
            <Image
              src="/images/CT70 1.png"
              alt="CT Profile"
              width={466}
              height={327}
              className="object-contain"
            />
            <h2 className="mt-8 text-2xl font-extrabold text-gray-800">
              PROFILE
            </h2>
            <p className="mt-4 text-lg text-gray-700">
              Make sure to select windows with profiles extruded in Germany from
              a special hot country compound and designed with 5 chambers to
              withstand the extreme weather conditions of the Gulf countries
              while maintaining its aesthetic nature.
              <br />
              <strong>
                Only the profiles made in Germany have these characteristics.
              </strong>
            </p>
          </div>

          {/* Hardware Section */}
          <div className="relative rounded-3xl bg-white p-8 shadow-lg">
            <Image
              src="/img/ct70-3.png"
              alt="CT Hardware"
              width={466}
              height={327}
              className="mx-auto"
            />
            <h2 className="mt-8 text-2xl font-extrabold text-gray-800">
              HARDWARE
            </h2>
            <p className="mt-4 text-lg text-gray-700">
              The hardware system must provide the best-in-class security and
              insulation for the windows. It should offer a wide variety of
              customization options while keeping the windows looking sleek and
              modern.
            </p>
          </div>

          {/* Steel Section */}
          <div className="relative rounded-3xl bg-white p-8 shadow-lg">
            <Image
              src="/img/ct70-2.png"
              alt="CT Steel"
              width={466}
              height={327}
              className="mx-auto"
            />
            <h2 className="mt-8 text-2xl font-extrabold text-gray-800">
              STEEL
            </h2>
            <p className="mt-4 text-lg text-gray-700">
              The strong, corrosion-protected steel profiles in the window frame
              ensure stability, reliability, and longevity. All fittings are
              anchored securely in the steel reinforcement on all sides.
            </p>
          </div>

          {/* Accessories Section */}
          <div className="relative rounded-3xl bg-white p-8 shadow-lg">
            <Image
              src="/img/ct70-4.png"
              alt="CT Accessories"
              width={466}
              height={327}
              className="mx-auto"
            />
            <h2 className="mt-8 text-2xl font-extrabold text-gray-800">
              ACCESSORIES
            </h2>
            <p className="mt-4 text-lg text-gray-700">
              Window accessories should allow you to create individual design
              accents. Choose from a wide variety of options to match your
              vision, whether it's clean, linear designs or colorful accents.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Benifits_2;
