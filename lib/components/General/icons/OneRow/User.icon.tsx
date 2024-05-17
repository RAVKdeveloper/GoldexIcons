import React, { FC } from "react";

interface Props {
  color?: string;
  opacity?: number;
  width?: number;
  height?: number;
}

export const UserIcon: FC<Props> = ({
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
        d="M16 7C16 9.20914 14.2091 11 12 11C9.79086 11 8 9.20914 8 7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7Z"
        fill={color}
        fillOpacity={opacity}
      />
      <path
        d="M20 16.5C20 18.9853 20 21 12 21C4 21 4 18.9853 4 16.5C4 14.0147 7.58172 12 12 12C16.4183 12 20 14.0147 20 16.5Z"
        fill={color}
        fillOpacity={opacity}
      />
    </svg>
  );
};
