import "./input.scss";

const Input = ({
  handlerChange,
  label,
  htmlFor,
  placeholder,
  currentValue,
  isIcon,
  type = "text",
}) => {
  const onSetValue = (e) => {
    handlerChange(e.target.value);
  };

  return (
    <div className="input">
      <label className="input__label" htmlFor={htmlFor}>
        {label}
      </label>
      <input
        className="input__input"
        type={type}
        id={htmlFor}
        value={currentValue}
        onChange={onSetValue}
        placeholder={placeholder}
      />
      {isIcon && (
        <img
          src="/images/btn/check-circle-icon.svg"
          alt="check-circle-icon"
          className="input__icon"
        />
      )}
    </div>
  );
};

export default Input;
