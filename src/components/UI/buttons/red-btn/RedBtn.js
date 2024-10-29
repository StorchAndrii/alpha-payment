import("./red-btn.scss");

const RedBtn = ({ title, type = "button", isDisabled = false }) => {
  return (
    <button className="red-btn" type={type} disabled={isDisabled}>
      {title}
    </button>
  );
};

export default RedBtn;
