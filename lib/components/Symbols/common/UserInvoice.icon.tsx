import React, { FC } from "react";

interface Props {
  color?: string;
  width?: number;
  height?: number;
}

export const UserInvoiceIcon: FC<Props> = ({
  color = "#73E5CF",
  width = 28,
  height = 28,
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 28 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="28" height="28" rx="14" fill={color} fillOpacity="0.12" />
      <path
        d="M16.6667 10.6667C16.6667 12.1394 15.4727 13.3333 14 13.3333C12.5272 13.3333 11.3333 12.1394 11.3333 10.6667C11.3333 9.19391 12.5272 8 14 8C15.4727 8 16.6667 9.19391 16.6667 10.6667Z"
        fill={color}
      />
      <path
        d="M19.3333 17C19.3333 18.6569 19.3333 20 14 20C8.66666 20 8.66666 18.6569 8.66666 17C8.66666 15.3431 11.0545 14 14 14C16.9455 14 19.3333 15.3431 19.3333 17Z"
        fill={color}
      />
    </svg>
  );
};
