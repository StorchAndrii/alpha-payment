import "./amount.scss";
import Input from "../../UI/input/Input";
import { useState } from "react";

const Amount = () => {
  const MAX_AMOUNT = 906.0;
  const [amount, setAmount] = useState(21);

  const handlerChange = (value, type) => {
    let newAmount;
    if (type === "increment") {
      newAmount = Math.min(amount + value, MAX_AMOUNT);
    } else {
      newAmount = value > MAX_AMOUNT ? MAX_AMOUNT : value;
    }
    setAmount(newAmount);
  };

  return (
    <div className="amount">
      <h3 className="amount__title">Amount</h3>
      <Input
        handlerChange={handlerChange}
        currentValue={amount}
        type="number"
      />
      <div className="currency-buttons">
        {[10, 20, 30, 50, 100].map((value) => (
          <button
            key={value}
            onClick={() => handlerChange(value, "increment")}
            className="currency-button"
            type={"button"}
          >
            +${value}
          </button>
        ))}
      </div>
      <p className="amount__info">From 21.00 to 906.00 USD at a time</p>
    </div>
  );
};

export default Amount;
