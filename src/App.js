import paymentMethodsData from "./data/paymentMethodData.json";
import cryptocurrencyData from "./data/cryptocurrencyData.json";
import "./styles/app.scss";
import Header from "./components/header/Header";
import PaymentCategory from "./components/payment-category/PaymentCategory";
import PromoCodeForm from "./components/promo-code-form/PromoCodeForm";
import Transactions from "./components/transactions/Transactions";

function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <h1 className="app__title">Make a Deposit</h1>
        <h2 className="app__subtitle">Choose Payment Method</h2>
        <PaymentCategory data={paymentMethodsData} />
        <PaymentCategory data={cryptocurrencyData} />
        <PromoCodeForm />
        <Transactions />
      </main>
    </div>
  );
}

export default App;
