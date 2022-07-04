import React from "react";

const IconCloseEye = ({width, height, ...props}) => {
  return (
    <svg
      width={width || "24"}
      height={height || "24"}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M14.5299 9.47L9.46992 14.53C8.81992 13.88 8.41992 12.99 8.41992 12C8.41992 10.02 10.0199 8.42 11.9999 8.42C12.9899 8.42 13.8799 8.82 14.5299 9.47Z"
        stroke="#333333"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M17.8201 5.77C16.0701 4.45 14.0701 3.73 12.0001 3.73C8.47009 3.73 5.18009 5.81 2.89009 9.41C1.99009 10.82 1.99009 13.19 2.89009 14.6C3.68009 15.84 4.60009 16.91 5.60009 17.77"
        stroke="#333333"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8.41992 19.53C9.55992 20.01 10.7699 20.27 11.9999 20.27C15.5299 20.27 18.8199 18.19 21.1099 14.59C22.0099 13.18 22.0099 10.81 21.1099 9.39999C20.7799 8.87999 20.4199 8.38999 20.0499 7.92999"
        stroke="#333333"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M15.5099 12.7C15.2499 14.11 14.0999 15.26 12.6899 15.52"
        stroke="#333333"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9.47 14.53L2 22"
        stroke="#333333"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M22 2L14.53 9.47"
        stroke="#333333"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default IconCloseEye;
