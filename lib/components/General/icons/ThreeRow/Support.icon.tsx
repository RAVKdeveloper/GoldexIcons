import React, { FC } from "react";

interface Props {
  color?: string;
  opacity?: number;
  width?: number;
  height?: number;
}

export const SupportIcon: FC<Props> = ({
  color = "white",
  opacity = 1,
  ...props
}) => {
  return (
    <svg
      {...props}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <mask
        id="mask0_327_3464"
        style={{ maskType: "alpha" }}
        maskUnits="userSpaceOnUse"
        x="2"
        y="2"
        width="20"
        height="20"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12V16C22 16.002 22 16.0039 22 16.0059V18C22 19.0796 21.8258 20.0641 21.332 20.8047C20.7906 21.6169 19.958 22 19 22H14C13.4477 22 13 21.5523 13 21C13 20.4478 13.4477 20 14 20H19C19.3754 20 19.5427 19.8831 19.6679 19.6953C19.7782 19.53 19.8828 19.2605 19.9442 18.8484C19.6473 18.9468 19.3299 19 19 19C17.3431 19 16 17.6569 16 16V14C16 12.3431 17.3431 11 19 11H19.9381C19.446 7.05369 16.0796 4 12 4C7.92038 4 4.55399 7.05369 4.06189 11H5C6.65685 11 8 12.3431 8 14V16C8 17.6569 6.65685 19 5 19C3.34315 19 2 17.6569 2 16V12ZM4 13V16C4 16.5523 4.44772 17 5 17C5.55228 17 6 16.5523 6 16V14C6 13.4477 5.55228 13 5 13H4ZM20 13H19C18.4477 13 18 13.4477 18 14V16C18 16.5523 18.4477 17 19 17C19.5511 17 19.9982 16.5541 20 16.0034V14C20 13.9989 20 13.9978 20 13.9966V13Z"
          fill={color}
        />
      </mask>
      <g mask="url(#mask0_327_3464)">
        <rect width="24" height="24" fill={color} fillOpacity={opacity} />
      </g>
    </svg>
  );
};
