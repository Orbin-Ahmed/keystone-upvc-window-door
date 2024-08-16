import React from "react";
import CustomButton from ".";
import KeyboardDoubleArrowRightSharpIcon from "@mui/icons-material/KeyboardDoubleArrowRightSharp";

type Props = {};

function EstimateButton({}: Props) {
  return (
    <>
      <CustomButton className="flex items-center justify-center py-4">
        Request Your Free Estimate Today <KeyboardDoubleArrowRightSharpIcon />
      </CustomButton>
      <p className="mt-4 text-secondary-text">
        No Obligations • Hassle-Free Experience
      </p>
    </>
  );
}

export default EstimateButton;
