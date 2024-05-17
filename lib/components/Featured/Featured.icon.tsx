import React, { FC } from "react";

import type { FeaturedType } from "./Featured.type";

export const FeaturedIcon: FC<FeaturedType> = ({
  variant = "success",
  size = "md",
}) => {
  const colors = {
    success: "#17B26A",
    warning: "#F79009",
    critical: "#F04438",
  };

  const sizes = {
    lg: "46",
    md: "42",
    sm: "38",
    es: "34",
  };

  return (
    <svg
      width={sizes[size]}
      height={sizes[size]}
      viewBox="0 0 34 34"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g opacity="0.3">
        <rect
          x="6"
          y="6"
          width="22"
          height="22"
          rx="11"
          stroke={colors[variant]}
          stroke-width="2"
        />
      </g>
      <g opacity="0.1">
        <rect
          x="1"
          y="1"
          width="32"
          height="32"
          rx="16"
          stroke={colors[variant]}
          strokeWidth="2"
        />
      </g>
      <g clipPath="url(#clip0_301_800)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M17 11C13.6863 11 11 13.6863 11 17C11 20.3137 13.6863 23 17 23C20.3137 23 23 20.3137 23 17C23 13.6863 20.3137 11 17 11ZM9.66666 17C9.66666 12.9499 12.9499 9.66663 17 9.66663C21.0501 9.66663 24.3333 12.9499 24.3333 17C24.3333 21.05 21.0501 24.3333 17 24.3333C12.9499 24.3333 9.66666 21.05 9.66666 17Z"
          fill={colors[variant]}
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M17 13.6666C17.3682 13.6666 17.6667 13.9651 17.6667 14.3333V17C17.6667 17.3681 17.3682 17.6666 17 17.6666C16.6318 17.6666 16.3333 17.3681 16.3333 17V14.3333C16.3333 13.9651 16.6318 13.6666 17 13.6666Z"
          fill={colors[variant]}
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M16.3333 19.6666C16.3333 19.2984 16.6318 19 17 19H17.0067C17.3748 19 17.6733 19.2984 17.6733 19.6666C17.6733 20.0348 17.3748 20.3333 17.0067 20.3333H17C16.6318 20.3333 16.3333 20.0348 16.3333 19.6666Z"
          fill={colors[variant]}
        />
      </g>
      <defs>
        <clipPath id="clip0_301_800">
          <rect
            width="16"
            height="16"
            fill="white"
            transform="translate(9 9)"
          />
        </clipPath>
      </defs>
    </svg>
  );
};
