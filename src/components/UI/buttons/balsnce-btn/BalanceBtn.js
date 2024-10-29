import React from "react";
import("./balance-btn.scss");

const BalanceBtn = () => {
  return (
    <button className="balance-btn">
      <p className="balance-btn__total">125.03 $</p>
      <p className="balance-btn__percent">13%</p>
      <img src="/images/header/down_chevron.svg" alt="fi_menu" />
    </button>
  );
};

export default BalanceBtn;
