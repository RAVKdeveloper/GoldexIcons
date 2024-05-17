import React, { FC } from "react";

interface Props {
  width?: number;
  height?: number;
}

export const MastercardIcon: FC<Props> = ({ width = 23, height = 14 }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 23 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11.179 11.8295C9.99493 12.8275 8.45902 13.43 6.78069 13.43C3.03582 13.43 0 10.4303 0 6.73003C0 3.02972 3.03582 0.0300293 6.78069 0.0300293C8.45902 0.0300293 9.99493 0.632527 11.179 1.63057C12.363 0.632527 13.8989 0.0300293 15.5773 0.0300293C19.3221 0.0300293 22.358 3.02972 22.358 6.73003C22.358 10.4303 19.3221 13.43 15.5773 13.43C13.8989 13.43 12.363 12.8275 11.179 11.8295Z"
        fill="#ED0006"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11.179 11.8295C12.6369 10.6006 13.5614 8.77198 13.5614 6.73003C13.5614 4.68807 12.6369 2.85947 11.179 1.63057C12.363 0.632526 13.8989 0.0300293 15.5772 0.0300293C19.3221 0.0300293 22.3579 3.02972 22.3579 6.73003C22.3579 10.4303 19.3221 13.43 15.5772 13.43C13.8989 13.43 12.363 12.8275 11.179 11.8295Z"
        fill="#F9A000"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11.179 11.8295C12.6369 10.6006 13.5614 8.77199 13.5614 6.73005C13.5614 4.68811 12.6369 2.85952 11.179 1.63062C9.72109 2.85952 8.79663 4.68811 8.79663 6.73005C8.79663 8.77199 9.72109 10.6006 11.179 11.8295Z"
        fill="#FF5E00"
      />
    </svg>
  );
};
