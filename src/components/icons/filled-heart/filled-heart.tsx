import React from "react";
import { TIconProps_ } from "../types";

export default function FilledHeart({ fill = "black" }: TIconProps_) {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_14_6)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M9.99997 1.64251C15.5475 -4.05999 29.4175 5.91876 9.99997 18.75C-9.41753 5.92001 4.45247 -4.05999 9.99997 1.64251Z"
          fill={fill}
        />
      </g>
      <defs>
        <clipPath id="clip0_14_6">
          <rect width="20" height="20" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}
