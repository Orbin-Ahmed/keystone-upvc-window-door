import React, { useEffect, useState } from "react";
import CustomButton from ".";
import KeyboardDoubleArrowRightSharpIcon from "@mui/icons-material/KeyboardDoubleArrowRightSharp";
import { useTranslation } from "@/app/i18n";
import Link from "next/link";

type EstimateButtonProps = {
  lng?: string;
};

function EstimateButton({ lng }: EstimateButtonProps) {
  if (!lng) {
    lng = "en";
  }
  const [t, setT] = useState(() => (key: string) => key);

  useEffect(() => {
    const fetchTranslations = async () => {
      const { t: translation } = await useTranslation(lng);
      setT(() => translation);
    };

    fetchTranslations();
  }, [lng]);

  return (
    <>
      <Link href="/contact-us">
        <CustomButton className="flex items-center justify-center py-4">
          {t("Request Your Free Estimate Today")}{" "}
          <KeyboardDoubleArrowRightSharpIcon />
        </CustomButton>
        <p className="mt-4 text-secondary-text">
          {t("No Obligations • Hassle-Free Experience")}
        </p>
      </Link>
    </>
  );
}

export default EstimateButton;
