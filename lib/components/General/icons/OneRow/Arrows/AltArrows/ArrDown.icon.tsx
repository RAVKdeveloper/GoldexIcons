import React, { FC } from "react";

interface Props {
  color?: string;
  opacity?: number;
  width?: number;
  height?: number;
}

export const AltArrowDownIcon: FC<Props> = ({
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
        d="M12.3704 15.8351L18.8001 9.20467C19.2013 8.79094 18.9581 8 18.4297 8H5.5703C5.04189 8 4.79869 8.79094 5.1999 9.20467L11.6296 15.8351C11.8427 16.0549 12.1573 16.0549 12.3704 15.8351Z"
        fill={color}
        fillOpacity={opacity}
      />
    </svg>
  );
};

export const AltArrowUpIcon: FC<Props> = ({
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
        d="M12.3704 8.16485L18.8001 14.7953C19.2013 15.2091 18.9581 16 18.4297 16H5.5703C5.04189 16 4.79869 15.2091 5.1999 14.7953L11.6296 8.16485C11.8427 7.94505 12.1573 7.94505 12.3704 8.16485Z"
        fill={color}
        fillOpacity={opacity}
      />
    </svg>
  );
};
