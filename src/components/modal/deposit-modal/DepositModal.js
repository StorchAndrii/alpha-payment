import "./deposit-modal.scss";
import { useEffect, useState } from "react";
import CustomSelect from "../../UI/custom-select/CustomSelect";
import Amount from "../anount/Amount";
import RedBtn from "../../UI/buttons/red-btn/RedBtn";
import Input from "../../UI/input/Input";

const DepositModal = ({ isOpen, onClose }) => {
  const [promoCode, setPromoCode] = useState("");

  const handlerSubmitForm = (e) => {
    e.preventDefault();
    console.log("handlerSubmitForm:");
  };
  const handlerSubmitPromoCode = () => {
    console.log("promoCode:", promoCode);
  };

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <>
      <div
        className={`  ${isOpen ? "deposit-modal__backdrop" : "deposit-modal__backdrop_close"}`}
        onClick={onClose}
      />
      <div className={`deposit-modal ${isOpen ? "deposit-modal__open" : ""}`}>
        <div className="deposit-modal__header">
          <button className="deposit-modal__back-btn" onClick={onClose}>
            <img src="/images/modal/arrow-left.svg" alt="fi_menu" />
            <p className="deposit-modal__back-btn__title">
              Back to Payment Methods
            </p>
          </button>
          <button className="deposit-modal__close-btn" onClick={onClose}>
            <img src="/images/modal/close.svg" alt="fi_menu" />
          </button>
        </div>
        <div className="deposit-modal__current-balance">
          <p>
            Current Balance: <span>$ 125.03</span>
          </p>
        </div>
        <div className="deposit-modal__content">
          <form onSubmit={handlerSubmitForm}>
            <CustomSelect />
            <Amount />
            <div className="deposit-modal__promo-code">
              <h3 className="deposit-modal__promo-code_title">Promo Code</h3>
              <div className="deposit-modal__promo-code_wrapper">
                <Input
                  handlerChange={setPromoCode}
                  htmlFor="promo-code"
                  placeholder="Promo code"
                  isIcon={true}
                  currentValue={promoCode}
                />
                <RedBtn
                  title="Apply"
                  type="button"
                  isDisabled={!promoCode}
                  handlerClick={handlerSubmitPromoCode}
                />
              </div>
            </div>
            <RedBtn title="Deposit" type="submit" />
          </form>
        </div>
      </div>
    </>
  );
};

export default DepositModal;