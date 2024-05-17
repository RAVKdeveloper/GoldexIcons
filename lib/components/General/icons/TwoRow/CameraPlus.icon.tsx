import React, { FC } from "react";

interface Props {
  color?: string;
  opacity?: number;
  width?: number;
  height?: number;
}

export const CameraPlusIcon: FC<Props> = ({
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
        d="M19 1C19.5523 1 20 1.44772 20 2V4H22C22.5523 4 23 4.44772 23 5C23 5.55228 22.5523 6 22 6H20V8C20 8.55228 19.5523 9 19 9C18.4477 9 18 8.55228 18 8V6H16C15.4477 6 15 5.55228 15 5C15 4.44772 15.4477 4 16 4H18V2C18 1.44772 18.4477 1 19 1ZM8.35719 2H12.5C13.0523 2 13.5 2.44772 13.5 3C13.5 3.55228 13.0523 4 12.5 4H8.4C7.26339 4 6.47108 4.00078 5.85424 4.05118C5.24907 4.10062 4.90138 4.19279 4.63803 4.32698C4.07354 4.6146 3.6146 5.07354 3.32698 5.63803C3.19279 5.90138 3.10062 6.24907 3.05118 6.85424C3.00078 7.47108 3 8.26339 3 9.4V14.6C3 15.7366 3.00078 16.5289 3.05118 17.1458C3.10062 17.7509 3.19279 18.0986 3.32698 18.362C3.6146 18.9265 4.07354 19.3854 4.63803 19.673C4.90138 19.8072 5.24907 19.8994 5.85424 19.9488C6.47108 19.9992 7.26339 20 8.4 20H15.6C16.7366 20 17.5289 19.9992 18.1458 19.9488C18.7509 19.8994 19.0986 19.8072 19.362 19.673C19.9265 19.3854 20.3854 18.9265 20.673 18.362C20.8072 18.0986 20.8994 17.7509 20.9488 17.1458C20.9992 16.5289 21 15.7366 21 14.6V11.5C21 10.9477 21.4477 10.5 22 10.5C22.5523 10.5 23 10.9477 23 11.5V14.6428C23 15.7266 23 16.6008 22.9422 17.3086C22.8826 18.0375 22.7568 18.6777 22.455 19.27C21.9757 20.2108 21.2108 20.9757 20.27 21.455C19.6777 21.7568 19.0375 21.8826 18.3086 21.9422C17.6007 22 16.7266 22 15.6428 22H8.35717C7.27339 22 6.39925 22 5.69138 21.9422C4.96253 21.8826 4.32234 21.7568 3.73005 21.455C2.78924 20.9757 2.02433 20.2108 1.54497 19.27C1.24318 18.6777 1.11737 18.0375 1.05782 17.3086C0.999982 16.6007 0.99999 15.7266 1 14.6428V9.35719C0.99999 8.27341 0.999982 7.39925 1.05782 6.69138C1.11737 5.96253 1.24318 5.32234 1.54497 4.73005C2.02433 3.78924 2.78924 3.02433 3.73005 2.54497C4.32234 2.24318 4.96253 2.11737 5.69138 2.05782C6.39926 1.99998 7.27341 1.99999 8.35719 2ZM12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9ZM7 12C7 9.23858 9.23858 7 12 7C14.7614 7 17 9.23858 17 12C17 14.7614 14.7614 17 12 17C9.23858 17 7 14.7614 7 12Z"
        fill={color}
        fillOpacity={opacity}
      />
    </svg>
  );
};
