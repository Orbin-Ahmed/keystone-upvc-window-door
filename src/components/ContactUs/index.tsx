"use client";
import { useTranslation } from "@/app/i18n";
import React, { useEffect, useState } from "react";

type ContactUSProps = {
  lng: string;
};

const ContactUS = ({ lng }: ContactUSProps) => {
  const [t, setT] = useState(() => (key: string) => key);

  useEffect(() => {
    const fetchTranslations = async () => {
      const { t: translation } = await useTranslation(lng);
      setT(() => translation);
    };

    fetchTranslations();
  }, [lng]);

  return (
    <div className="flex flex-col px-5 py-8">
      <div className="mt-16 flex flex-col items-center justify-center gap-6 xl:flex-row">
        <form className="flex flex-grow basis-1/2 flex-col items-center rounded-2xl bg-white p-10 shadow-lg">
          <h2 className="w-full text-center text-lg font-extrabold sm:text-2xl lg:text-4xl">
            {t("Ready to Transform Your Home?")}
            <br />
            {t("Let's Get Started!")}
          </h2>
          <p className="mt-2 text-justify text-xs sm:text-center sm:text-base">
            {t(
              " We're excited to help you start your home transformation journey. Fill in the form below to request your free estimate. One of our skilled engineers will get in touch with you to discuss your needs and provide a detailed quote",
            )}
          </p>

          <div className="flex w-full flex-col">
            <label
              htmlFor="name"
              className="mb-2 mt-4 text-sm font-semibold sm:text-base"
            >
              {t("Your Name")}
            </label>
            <input
              type="text"
              id="name"
              className="mt-2 h-[49px] w-full rounded-2xl bg-white shadow-xl"
              required
            />

            <label
              htmlFor="email"
              className="mb-2 mt-4 text-sm font-semibold sm:text-base"
            >
              {t("Email Address")}
            </label>
            <input
              type="email"
              id="email"
              className="mt-2 h-[49px] w-full rounded-2xl bg-white shadow-xl"
              required
            />

            <label
              htmlFor="phone"
              className="mb-2 mt-4 text-sm font-semibold sm:text-base"
            >
              {t("Contact Number")}
            </label>
            <input
              type="tel"
              id="phone"
              className="mt-2 h-[49px] w-full rounded-2xl bg-white shadow-xl focus-visible:border focus-visible:border-opacity-65"
              required
            />

            <button
              type="submit"
              className="mt-10 w-full rounded-2xl bg-primary-color py-4 text-center text-sm font-bold text-white shadow-xl sm:text-base"
            >
              {t("Submit Your Request")}
            </button>
          </div>
        </form>

        <aside className="mt-10 flex basis-1/2 flex-col lg:mt-0">
          <h3 className="text-center text-lg font-extrabold sm:text-2xl lg:text-4xl">
            {t("Join Our Growing Family of Satisfied Homeowners!")}
          </h3>
          <ul className="mt-4 flex flex-wrap justify-between gap-2 font-bold">
            <li className="flex items-center gap-2 text-xs sm:text-base">
              <span className="h-5 w-5 bg-[#8ecb2c]"></span>
              {t("Sound Proof")}
            </li>
            <li className="flex items-center gap-2 text-xs sm:text-base">
              <span className="h-5 w-5 bg-[#8ecb2c]"></span>
              {t("Weather Proof")}
            </li>
            <li className="flex items-center gap-2 text-xs sm:text-base">
              <span className="h-5 w-5 bg-[#8ecb2c]"></span>
              {t("Near to Zero Maintenance")}
            </li>
          </ul>

          <div className="mt-10 border border-black border-opacity-50 p-10">
            <div className="flex flex-col gap-5 lg:flex-row">
              <div className="flex-grow">
                <h4 className="font-bold">
                  {t("Get Your Free Estimate Today")}
                </h4>
                <p className="mt-2 opacity-70">
                  {t("Receive a detailed quote after your request")}
                </p>
              </div>
              <p className="mt-5 opacity-70 lg:mt-0">
                {t("No payment required today")}
              </p>
            </div>
          </div>

          <div className="mt-10 flex flex-col">
            <h4 className="font-bold">{t("10-Year Warranty")}</h4>
            <p className="mt-2 opacity-70">
              {t(
                "We stand by the quality of our profiles with a 10-year warranty.",
              )}
            </p>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default ContactUS;
