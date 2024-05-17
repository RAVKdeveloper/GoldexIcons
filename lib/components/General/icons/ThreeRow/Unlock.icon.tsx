import React, { FC, HTMLAttributes } from "react";

interface Props extends HTMLAttributes<HTMLOrSVGElement> {
  color?: string;
  opacity?: number;
  width?: number;
  height?: number;
}

export const UnLockIcon: FC<Props> = ({
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
        id="mask0_466_3724"
        style={{ maskType: "alpha" }}
        maskUnits="userSpaceOnUse"
        x="3"
        y="2"
        width="18"
        height="20"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M6 8C6 4.68629 8.68629 2 12 2C14.4619 2 16.5754 3.48263 17.5003 5.59963C17.7214 6.10572 17.4904 6.69523 16.9843 6.91635C16.4782 7.13747 15.8887 6.90646 15.6676 6.40037C15.0494 4.98556 13.6387 4 12 4C9.79086 4 8 5.79086 8 8V9.00163C8.23771 8.99999 8.4904 9 8.7587 9H15.2413C16.0463 8.99999 16.7106 8.99998 17.2518 9.04419C17.8139 9.09012 18.3306 9.18868 18.816 9.43597C19.5686 9.81947 20.1805 10.4314 20.564 11.184C20.8113 11.6694 20.9099 12.1861 20.9558 12.7482C21 13.2894 21 13.9537 21 14.7587V16.2413C21 17.0463 21 17.7106 20.9558 18.2518C20.9099 18.8139 20.8113 19.3306 20.564 19.816C20.1805 20.5686 19.5686 21.1805 18.816 21.564C18.3306 21.8113 17.8139 21.9099 17.2518 21.9558C16.7106 22 16.0463 22 15.2413 22H8.75868C7.95372 22 7.28936 22 6.74817 21.9558C6.18608 21.9099 5.66937 21.8113 5.18404 21.564C4.43139 21.1805 3.81947 20.5686 3.43597 19.816C3.18868 19.3306 3.09012 18.8139 3.04419 18.2518C2.99998 17.7106 2.99999 17.0463 3 16.2413V14.7587C2.99999 13.9537 2.99998 13.2894 3.04419 12.7482C3.09012 12.1861 3.18868 11.6694 3.43597 11.184C3.81947 10.4314 4.43139 9.81947 5.18404 9.43597C5.44614 9.30243 5.71739 9.21225 6 9.15032V8ZM6.91104 11.0376C6.47262 11.0734 6.24842 11.1383 6.09202 11.218C5.7157 11.4097 5.40973 11.7157 5.21799 12.092C5.1383 12.2484 5.07337 12.4726 5.03755 12.911C5.00078 13.3611 5 13.9434 5 14.8V16.2C5 17.0566 5.00078 17.6389 5.03755 18.089C5.07337 18.5274 5.1383 18.7516 5.21799 18.908C5.40973 19.2843 5.7157 19.5903 6.09202 19.782C6.24842 19.8617 6.47262 19.9266 6.91104 19.9624C7.36113 19.9992 7.94342 20 8.8 20H15.2C16.0566 20 16.6389 19.9992 17.089 19.9624C17.5274 19.9266 17.7516 19.8617 17.908 19.782C18.2843 19.5903 18.5903 19.2843 18.782 18.908C18.8617 18.7516 18.9266 18.5274 18.9624 18.089C18.9992 17.6389 19 17.0566 19 16.2V14.8C19 13.9434 18.9992 13.3611 18.9624 12.911C18.9266 12.4726 18.8617 12.2484 18.782 12.092C18.5903 11.7157 18.2843 11.4097 17.908 11.218C17.7516 11.1383 17.5274 11.0734 17.089 11.0376C16.6389 11.0008 16.0566 11 15.2 11H8.8C7.94342 11 7.36113 11.0008 6.91104 11.0376ZM12 13.5C12.5523 13.5 13 13.9477 13 14.5V16.5C13 17.0523 12.5523 17.5 12 17.5C11.4477 17.5 11 17.0523 11 16.5V14.5C11 13.9477 11.4477 13.5 12 13.5Z"
          fill={color}
        />
      </mask>
      <g mask="url(#mask0_466_3724)">
        <rect width="24" height="24" fill={color} fillOpacity={opacity} />
      </g>
    </svg>
  );
};
