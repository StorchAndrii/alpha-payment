import { useState } from "react";
import Input from "../UI/input/Input";
import RedBtn from "../UI/buttons/red-btn/RedBtn";
import("./promo-code-form.scss");

const PromoCodeForm = ({ title = "Have a Promo Code?" }) => {
  const [promoCode, setPromoCode] = useState("");

  const handlerSubmit = (e) => {
    e.preventDefault();
    console.log("promoCode:", promoCode);
  };
  return (
    <section className="promo-code-form">
      <h2 className="promo-code-form__title">{title}</h2>
      <form onSubmit={handlerSubmit} className="promo-code-form__form">
        <Input
          handlerChange={setPromoCode}
          label="Enter promo code here. It will activate a special bonus!"
          htmlFor="promo-code"
          placeholder="Promo code"
          isIcon={true}
          currentValue={promoCode}
        />
        <RedBtn title="Apply" type="submit" isDisabled={!promoCode} />
      </form>
    </section>
  );
};

export default PromoCodeForm;
