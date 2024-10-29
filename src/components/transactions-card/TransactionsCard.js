import "./transactions-card.scss";

const TransactionsCard = ({ transaction }) => {
  const statusColor = (status) => {
    switch (status) {
      case "Processing":
        return "status-processing";
      case "Active":
        return "status-active";
      case "Performed":
        return "status-performed";
      case "Failed":
        return "status-failed";
      default:
        return "";
    }
  };
  const transactionDetails = [
    { title: transaction.withdraw, subtitle: "Withdraw" },
    { title: transaction.transactionsNumber, subtitle: "Transaction Number" },
    { title: transaction.paymentDate, subtitle: "Payment Date" },
    { title: transaction.amountPayed + "$", subtitle: "Amount Payed" },
  ];

  return (
    <li className="transactions-card">
      <div className="transactions-card__grid">
        <div className="transactions-card__img-wrapper">
          <img
            className="transactions-card__icon"
            src={transaction.image}
            alt={"logo"}
          />
        </div>
        <div className="transactions-card__status">
          <p
            className={`transactions-card__status_title ${statusColor(transaction.status)}`}
          >
            {transaction.status}
          </p>
          <p className="transactions-card__status_subtitle">Operation Status</p>
        </div>
        <div className="transactions-card__info-transaction">
          {transactionDetails.map((detail, index) => (
            <div
              key={index}
              className={
                detail.subtitle === "Amount Payed" &&
                "transactions-card__info-transaction_amount"
              }
            >
              <p className="transactions-card__info-transaction_title">
                {detail.title}
              </p>
              <p className="transactions-card__info-transaction_subtitle">
                {detail.subtitle}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div className="transactions-card__line" />
    </li>
  );
};

export default TransactionsCard;
