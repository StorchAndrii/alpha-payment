import React from "react";
import("./plus-btn.scss");

const PlusBtn = ({ handlerClick }) => {
  return (
    <button className="plus-btn" onClick={handlerClick}>
      <img src="/images/header/Plus-btn.svg" alt="plus" />
    </button>
  );
};

export default PlusBtn;
