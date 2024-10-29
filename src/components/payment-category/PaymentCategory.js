import React from "react";
import PaymentsCard from "../payments-card/PaymentsCard";
import("./payment-category.scss");

const PaymentCategory = ({ data }) => {
  return (
    <section className="payment-category">
      <h3>{data.title}</h3>
      <ul className="payment-category__cards">
        {data.items.map((card) => (
          <PaymentsCard key={card.id} card={card} />
        ))}
      </ul>
    </section>
  );
};

export default PaymentCategory;
