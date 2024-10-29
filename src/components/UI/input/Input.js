import { useState } from "react";
import "./input.scss";

const Input = ({ handlerChange, label, htmlFor, placeholder }) => {
  const [value, setValue] = useState("");
  const onSetValue = (e) => {
    setValue(e.target.value);
    handlerChange(e.target.value);
  };
  return (
    <div className="input">
      <label className="input__label" htmlFor={htmlFor}>
        {label}
      </label>
      <input
        className="input__input"
        type="text"
        id={htmlFor}
        value={value}
        onChange={onSetValue}
        placeholder={placeholder}
      />
      <img
        src="/images/btn/check-circle-icon.svg"
        alt="check-circle-icon"
        className="input__icon"
      />
    </div>
  );
};

export default Input;
