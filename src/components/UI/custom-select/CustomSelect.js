import React, { useState } from "react";
import "./custom-select.scss";

const paymentOptions = [
  {
    id: 1,
    label: "Mastercard",
    commission: "3%",
    notice: "Please notice that you will send money in the USD",
    icon: "/images/payment-methods/mastercard-logo.svg",
  },
  {
    id: 2,
    label: "Visa",
    commission: "2.5%",
    notice: "Please note: transaction fee may apply",
    icon: "/images/payment-methods/visa-logo.svg",
  },
  {
    id: 3,
    label: "Skrill",
    commission: "1.5%",
    notice: "Instant payment option",
    icon: "/images/payment-methods/skrill_logo.svg",
  },
  {
    id: 4,
    label: "Perfect Money, EUR",
    commission: "1.5%",
    notice: "Instant payment option",
    icon: "/images/payment-methods/pm-logo.svg",
  },
  {
    id: 5,
    label: "Piastrix, EUR",
    commission: "1.5%",
    notice: "Instant payment option",
    icon: "/images/payment-methods/piastrix-logo.svg",
  },
  {
    id: 6,
    label: "SticPay, EUR",
    commission: "1.5%",
    notice: "Instant payment option",
    icon: "/images/payment-methods/sticpay-logo.svg",
  },
  {
    id: 7,
    label: "PIN",
    commission: "1.5%",
    notice: "Instant payment option",
    icon: "/images/payment-methods/pin-logo.svg",
  },
];

const CustomSelect = () => {
  const [selectedOption, setSelectedOption] = useState(paymentOptions[0]); // Default value
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
        {paymentOptions.map((option) => (
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
