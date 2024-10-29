import React from "react";
import "./header.scss";
import BalanceBtn from "../UI/buttons/balsnce-btn/BalanceBtn";
import PlusBtn from "../UI/buttons/plus-btn/PlusBtn";
import UserActions from "../user-actions/UserActions";
import Avatar from "../avatar/Avatar";

const Header = () => {
  return (
    <header className="header">
      <div className="header__menu">
        <img src="/images/header/fi_menu.svg" alt="fi_menu" />
        <img
          src="/images/header/logo.svg"
          alt="logo"
          className="header__menu_logo"
        />
      </div>
      <div className="header__user-menu">
        <UserActions />
        <div className="header__balance">
          <BalanceBtn />
          <PlusBtn />
        </div>
        <Avatar />
      </div>
    </header>
  );
};

export default Header;
