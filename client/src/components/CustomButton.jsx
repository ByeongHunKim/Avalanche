import React from "react";
import s from "../styles";

const CustomButton = ({ title, handleClick, restStyles }) => {
  return (
    <button
      type="button"
      className={`${s.btn} ${restStyles}`}
      onClick={handleClick}
    >
      {title}
    </button>
  );
};

export default CustomButton;
