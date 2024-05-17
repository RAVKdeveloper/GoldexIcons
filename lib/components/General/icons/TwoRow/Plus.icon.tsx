import React, { FC } from "react";

interface Props {
  color?: string;
  opacity?: number;
  width?: number;
  height?: number;
}

export const PlusIcon: FC<Props> = ({
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
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2.51471 12C2.51471 11.4477 2.96242 11 3.51471 11H11L11 3.51471C11 2.96242 11.4477 2.51471 12 2.51471C12.5523 2.51471 13 2.96242 13 3.51471V11H20.4853C21.0376 11 21.4853 11.4477 21.4853 12C21.4853 12.5523 21.0376 13 20.4853 13H13V20.4853C13 21.0376 12.5523 21.4853 12 21.4853C11.4477 21.4853 11 21.0376 11 20.4853L11 13H3.51471C2.96242 13 2.51471 12.5523 2.51471 12Z"
        fill={color}
        fillOpacity={opacity}
      />
    </svg>
  );
};
