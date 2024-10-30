import { useState } from "react";
import "./header.scss";
import BalanceBtn from "../UI/buttons/balsnce-btn/BalanceBtn";
import PlusBtn from "../UI/buttons/plus-btn/PlusBtn";
import UserActions from "../user-actions/UserActions";
import Avatar from "../avatar/Avatar";
import SideMenu from "../side-menu/SideMenu";
import DepositModal from "../modal/deposit-modal/DepositModal";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };
  const toggleModal = () => {
    setIsModalOpen((prev) => !prev);
  };
  return (
    <>
      <header className="header">
        <div className="header__menu">
          <button onClick={toggleMenu}>
            <img src="/images/header/fi_menu.svg" alt="fi_menu" />
          </button>
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
            <PlusBtn handlerClick={toggleModal} />
          </div>
          <Avatar />
        </div>
        <DepositModal isOpen={isModalOpen} onClose={toggleModal} />
      </header>
      <SideMenu isOpen={isMenuOpen} onClose={toggleMenu} />
    </>
  );
};

export default Header;
