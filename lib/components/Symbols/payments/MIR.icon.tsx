import React, { FC } from "react";

interface Props {
  width?: number;
  height?: number;
}

export const MIRIcon: FC<Props> = ({ width = 28, height = 10 }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 28 10"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2.17004 1.70996H4.48004C4.69004 1.70996 5.32003 1.63996 5.60003 2.61995C5.81003 3.24995 6.09003 4.22995 6.51003 5.69994H6.65003C7.07003 4.15995 7.42003 3.10995 7.56003 2.61995C7.84003 1.63996 8.54002 1.70996 8.82002 1.70996H10.99V8.42994H8.75002V4.43995H8.61002L7.42003 8.42994H5.74003L4.55004 4.43995H4.34004V8.42994H2.17004M11.9 1.70996H14.14V5.69994H14.35L15.82 2.40995C16.1 1.77996 16.73 1.70996 16.73 1.70996H18.83V8.42994H16.59V4.43995H16.45L14.98 7.72994C14.7 8.35994 14 8.42994 14 8.42994H11.9M21.84 6.39994V8.42994H19.74V4.92995H26.6C26.32 5.76994 25.34 6.39994 24.22 6.39994"
        fill="#1F8860"
      />
      <path
        d="M26.7399 4.50983C27.0199 3.24983 26.1799 1.70984 24.3599 1.70984H19.5999C19.7399 3.17983 20.9999 4.50983 22.3299 4.50983"
        fill="url(#paint0_linear_44_6583)"
      />
      <defs>
        <linearGradient
          id="paint0_linear_44_6583"
          x1="25.8999"
          y1="0.799842"
          x2="20.2999"
          y2="0.799842"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#1F5CD7" />
          <stop offset="1" stopColor="#02AEFF" />
        </linearGradient>
      </defs>
    </svg>
  );
};
