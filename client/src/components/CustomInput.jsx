import React from "react";
import s from "../styles";

const regex = /^[A-Za-z0-9]+$/;

const CustomInput = ({ lable, placeholder, value, handleValueChange }) => {
  return (
    <>
      <lable htmlFor="name" className={s.label}>
        {lable}
      </lable>
      <input
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={(e) => {
          if (e.target.value === "" || regex.test(e.target.value))
            handleValueChange(e.target.value);
        }}
        className={s.input}
      />
    </>
  );
};

export default CustomInput;
