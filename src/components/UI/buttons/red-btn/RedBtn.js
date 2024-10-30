import("./red-btn.scss");

const RedBtn = ({
  title,
  type = "button",
  isDisabled = false,
  handlerClick = () => {},
}) => {
  return (
    <button
      className="red-btn"
      type={type}
      disabled={isDisabled}
      onClick={handlerClick}
    >
      {title}
    </button>
  );
};

export default RedBtn;
