import "./side-menu.scss";
import { createPortal } from "react-dom";

const links = [
  { id: 1, title: "Casino Games" },
  { id: 2, title: "Live Games" },
  { id: 3, title: "TV-Bet" },
  { id: 4, title: "Sport Games" },
  { id: 5, title: "Virtual" },
  { id: 6, title: "Tournaments" },
  { id: 7, title: "Spin Shop" },
  { id: 8, title: "FAQ" },
  { id: 9, title: "Support Chat" },
];

const SideMenu = ({ isOpen, onClose }) => {
  return createPortal(
    <aside className={`side-menu ${isOpen ? "side-menu--open" : ""}`}>
      <div className="side-menu__header">
        <img src="/images/header/logo.svg" alt="logo" className="logo" />
        <button className="side-menu__close-button" onClick={onClose}>
          <img src="/images/btn/close-icon.svg" alt="close" />
        </button>
      </div>
      <nav className="side-menu__nav">
        <ul>
          {links.map((link) => (
            <li key={link.id}>
              <a href="#" onClick={onClose}>
                {link.title}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </aside>,
    document.getElementById("side-menu-root"),
  );
};

export default SideMenu;
