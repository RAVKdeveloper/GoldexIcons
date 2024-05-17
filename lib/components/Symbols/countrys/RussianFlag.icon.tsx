import React, { FC } from "react";

interface Props {
  width?: number;
  height?: number;
}

export const RussianFlagIcon: FC<Props> = ({ width = 24, height = 24 }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_327_3563)">
        <path
          d="M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24Z"
          fill="#F0F0F0"
        />
        <path
          d="M23.2539 16.1735C23.7363 14.8735 24.0003 13.4674 24.0003 11.9996C24.0003 10.5317 23.7363 9.12567 23.2539 7.82568H0.746665C0.264322 9.12567 0.000274658 10.5317 0.000274658 11.9996C0.000274658 13.4674 0.264322 14.8735 0.746665 16.1735L12.0003 17.2169L23.2539 16.1735Z"
          fill="#0052B4"
        />
        <path
          d="M12.0003 23.9995C17.1599 23.9995 21.5584 20.743 23.2539 16.1733H0.746719C2.44223 20.743 6.84075 23.9995 12.0003 23.9995Z"
          fill="#D80027"
        />
      </g>
      <defs>
        <clipPath id="clip0_327_3563">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};
