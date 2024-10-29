import "./user-actions.scss";

const userActions = [
  {
    icon: "/images/header/search.svg",
    alt: "Search",
  },
  {
    icon: "/images/header/gift.svg",
    alt: "Gift",
  },
  {
    icon: "/images/header/bell.svg",
    alt: "Notifications",
  },
];

const UserActions = () => {
  const newData = { Search: 0, Gift: 0, Notifications: 1 };
  return (
    <div className="user-actions">
      {userActions.map((action) => (
        <button
          key={action.alt}
          className={`user-actions__icon ${newData[action.alt] ? "red-bell" : ""}`}
        >
          <img src={action.icon} alt={action.alt} />
        </button>
      ))}
    </div>
  );
};
export default UserActions;
