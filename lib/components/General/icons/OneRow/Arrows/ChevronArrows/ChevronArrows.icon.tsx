import React, { FC } from "react";

interface Props {
  color?: string;
  opacity?: number;
  width?: number;
  height?: number;
}

export const ChevronArrowDownIcon: FC<Props> = ({
  color = "white",
  opacity = 1,
  width = 24,
  height = 24,
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M18.6893 7.8965C19.0799 7.50598 19.713 7.50598 20.1036 7.8965C20.4941 8.28703 20.4941 8.92019 20.1036 9.31072L13.4572 15.9572C12.8714 16.5429 11.9216 16.5429 11.3358 15.9572L4.68936 9.31072C4.29886 8.92019 4.29886 8.28703 4.68936 7.8965C5.07986 7.50598 5.71306 7.50598 6.10356 7.8965L12.3965 14.1894L18.6893 7.8965Z"
        fill={color}
        fillOpacity={opacity}
      />
    </svg>
  );
};

export const ChevronArrowUpIcon: FC<Props> = ({
  color = "white",
  opacity = 1,
  width = 24,
  height = 24,
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6.10359 16.1035C5.71306 16.494 5.0799 16.494 4.68937 16.1035C4.29885 15.713 4.29885 15.0798 4.68937 14.6893L11.3358 8.04279C11.9216 7.45709 12.8714 7.45709 13.4572 8.04279L20.1036 14.6893C20.4941 15.0798 20.4941 15.713 20.1036 16.1035C19.7131 16.494 19.0799 16.494 18.6894 16.1035L12.3965 9.81059L6.10359 16.1035Z"
        fill={color}
        fillOpacity={opacity}
      />
    </svg>
  );
};
