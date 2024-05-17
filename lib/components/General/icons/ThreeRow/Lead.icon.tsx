import React, { FC } from "react";

interface Props {
  color?: string;
  opacity?: number;
  width?: number;
  height?: number;
}

export const LeadIcon: FC<Props> = ({
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
        d="M8.31319 3.52713C10.3494 1.49096 13.6506 1.49096 15.6868 3.52713L20.4729 8.31319C22.509 10.3494 22.509 13.6506 20.4729 15.6868L15.6868 20.4729C13.6506 22.509 10.3494 22.509 8.31319 20.4729L3.52713 15.6868C1.49096 13.6506 1.49096 10.3494 3.52713 8.31319L8.31319 3.52713ZM14.2958 4.91816C13.0279 3.65023 10.9721 3.65023 9.70422 4.91816L4.91816 9.70422C3.65023 10.9721 3.65023 13.0279 4.91816 14.2958L9.70422 19.0818C10.9721 20.3498 13.0279 20.3498 14.2958 19.0818L19.0818 14.2958C20.3498 13.0279 20.3498 10.9721 19.0818 9.70422L14.2958 4.91816Z"
        fill={color}
        fillOpacity={opacity}
      />
    </svg>
  );
};
