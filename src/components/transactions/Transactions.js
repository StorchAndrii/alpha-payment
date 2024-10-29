import transactionsData from "../../data/transactionsDate.json";
import "./transactions.scss";
import Filter from "../UI/buttons/filter/Filter";
import TransactionsCard from "../transactions-card/TransactionsCard";
import RedBtn from "../UI/buttons/red-btn/RedBtn";
import React from "react";

const Transactions = () => {
  return (
    <section className="transactions">
      <div className="transactions__header">
        <h2 className="transactions__header_title">Transactions</h2>
        <h2 className="transactions__header_title-desctop">
          Last Transactions
        </h2>
        <Filter />
      </div>
      <ul className="transactions__list">
        {transactionsData.items.map((transaction) => (
          <TransactionsCard key={transaction.id} transaction={transaction} />
        ))}
      </ul>
      <div className="transactions__show-more">
        <RedBtn title="Show More" />
      </div>
    </section>
  );
};

export default Transactions;
