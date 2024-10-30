import React, { useState } from "react";
import "./custom-select.scss";

const CustomSelect = ({ options }) => {
  const [selectedOption, setSelectedOption] = useState(options[0]);
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen((prev) => !prev);
  const handleSelect = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  return (
    <div className="custom-select">
      <div className="custom-select__header" onClick={toggleDropdown}>
        <img
          src={selectedOption.icon}
          alt={selectedOption.label}
          className="custom-select__icon"
        />
        <div className="custom-select__info">
          <h4>
            {selectedOption.label} • Commission {selectedOption.commission}
          </h4>
          <p>{selectedOption.notice}</p>
        </div>

        <img
          className={`custom-select__arrow ${isOpen ? "open" : ""}`}
          src="/images/modal/arrow-left.svg"
          alt={selectedOption.label}
        />
      </div>

      <ul
        className={`custom-select__list ${isOpen ? "custom-select__list--open" : ""}`}
      >
        {options.map((option) => (
          <li
            key={option.id}
            className="custom-select__item"
            onClick={() => handleSelect(option)}
          >
            {option.label}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CustomSelect;
