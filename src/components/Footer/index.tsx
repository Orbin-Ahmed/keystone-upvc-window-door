"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { UseTranslation } from "@/app/i18n";

type FooterProps = {
  lng: string;
};

const Footer = ({ lng }: FooterProps) => {
  const [t, setT] = useState(() => (key: string) => key);

  useEffect(() => {
    const fetchTranslations = async () => {
      const { t: translation } = await UseTranslation(lng);
      setT(() => translation);
    };

    fetchTranslations();
  }, [lng]);

  return (
    <footer className="bg-gray-800 py-8 text-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {/* Company Info */}
          <div>
            <h3 className="mb-4 text-xl font-bold">
              {t("Keystone uPVC Windows & Doors")}
            </h3>
            <p className="mb-4 text-gray-300">
              {t(
                "Keystone uPVC Windows & Doors offers premium quality solutions for your home. Achieve elegance, durability, and energy efficiency with our German-engineered products.",
              )}
            </p>
            <p className="text-gray-400">
              {t("© 2024 Keystone uPVC. All Rights Reserved.")}
            </p>
          </div>

          {/* Navigation Links */}
          <div>
            <h3 className="mb-4 text-xl font-bold">{t("Quick Links")}</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/">
                  <p className="text-gray-300 hover:text-white">{t("Home")}</p>
                </Link>
              </li>
              <li>
                <Link href="/products">
                  <p className="text-gray-300 hover:text-white">
                    {t("Our Product")}
                  </p>
                </Link>
              </li>
              <li>
                <Link href="/gallery">
                  <p className="text-gray-300 hover:text-white">
                    {t("Gallery")}
                  </p>
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Media Links */}
          <div>
            <h3 className="mb-4 text-xl font-bold">{t("Follow Us")}</h3>
            <div className="flex space-x-4">
              {/* <Link
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FacebookIcon className="h-6 w-6 text-gray-300 hover:text-white" />
              </Link> */}
              <Link
                href="https://www.instagram.com/keystone.upvc/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <InstagramIcon className="h-6 w-6 text-gray-300 hover:text-white" />
              </Link>
              <Link
                href="https://ae.linkedin.com/company/keystoneupvc"
                target="_blank"
                rel="noopener noreferrer"
              >
                <LinkedInIcon className="h-6 w-6 text-gray-300 hover:text-white" />
              </Link>
              <Link
                href="https://www.youtube.com/@keystoneupvc"
                target="_blank"
                rel="noopener noreferrer"
              >
                <YouTubeIcon className="h-6 w-6 text-gray-300 hover:text-white" />
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom section */}
        <div className="mt-8 border-t border-gray-700 pt-4 text-center">
          <p className="text-gray-400">
            {t("© 2024 Keystone uPVC. All Rights Reserved.")}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
