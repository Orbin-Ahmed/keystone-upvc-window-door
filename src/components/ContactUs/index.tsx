"use client";
import { UseTranslation } from "@/app/i18n";
import React, { useEffect, useState } from "react";

type ContactUSProps = {
  lng: string;
};

const ContactUS = ({ lng }: ContactUSProps) => {
  const [t, setT] = useState(() => (key: string) => key);
  const [formData, setFormData] = useState({ name: "", email: "", phone: "" });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  useEffect(() => {
    const fetchTranslations = async () => {
      const { t: translation } = await UseTranslation(lng);
      setT(() => translation);
    };

    fetchTranslations();
  }, [lng]);

  const handleChange = (e: any) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      const response = await fetch("/api/email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setMessage("Request submitted successfully!");
        setFormData({ name: "", email: "", phone: "" });
      } else {
        setMessage("Failed to submit your request. Please try again.");
      }
    } catch (error) {
      setMessage("An error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col px-5 py-8">
      <div className="mt-16 flex flex-col items-center justify-center gap-6 xl:flex-row">
        <form
          onSubmit={handleSubmit}
          className="flex flex-grow basis-1/2 flex-col items-center rounded-2xl bg-white p-10 shadow-lg"
        >
          <h2 className="w-full text-center text-lg font-extrabold sm:text-2xl lg:text-4xl">
            {t("Ready to Transform Your Home?")}
            <br />
            {t("Let's Get Started!")}
          </h2>
          <p className="mt-2 text-justify text-xs sm:text-center sm:text-base">
            {t(
              "We're excited to help you start your home transformation journey. Fill in the form below to request your free estimate. One of our skilled engineers will get in touch with you to discuss your needs and provide a detailed quote.",
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
              value={formData.name}
              onChange={handleChange}
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
              value={formData.email}
              onChange={handleChange}
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
              value={formData.phone}
              onChange={handleChange}
              className="mt-2 h-[49px] w-full rounded-2xl bg-white shadow-xl focus-visible:border focus-visible:border-opacity-65"
              required
            />

            <button
              type="submit"
              className="mt-10 w-full rounded-2xl bg-primary-color py-4 text-center text-sm font-bold text-white shadow-xl sm:text-base"
              disabled={loading}
            >
              {loading ? "Submitting..." : t("Submit Your Request")}
            </button>
          </div>

          {message && <p className="mt-4 text-center">{message}</p>}
        </form>
      </div>
    </div>
  );
};

export default ContactUS;
