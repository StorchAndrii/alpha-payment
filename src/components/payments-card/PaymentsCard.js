import React from "react";

import("./payments-card.scss");

const PaymentsCard = ({ card }) => {
  return (
    <li key={card.id} className="payments-card">
      <img
        className="payments-card__icon"
        src={card.image}
        alt={card.title + "-logo"}
      />
      <p className="payments-card__title">{card.title}</p>
      <p className="payments-card__commission">Commission {card.commission}%</p>
    </li>
  );
};

export default PaymentsCard;
