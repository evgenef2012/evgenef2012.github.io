import React from "react";
import "./Header.css";

function Header({ onHomeClick, onAboutClick }) {
  return (
    <header className="header">
      <h1 className="header_all_comp">
        <div className="header-title_1">N.E.</div>
        <div className="header-title_2">NEFEDOV EVGENI</div>
        <div className="header-title_3">PORTFOLIO</div>
      </h1>
      <hr></hr>
      <nav>
        <ul className="link_container">
          <li className="link">
            <a href="#" onClick={onHomeClick}>
              Home
            </a>
          </li>
          <li className="link">
            <a href="#">
              Projects
            </a>
          </li>
          <li className="link">
            <a href="#" onClick={onAboutClick}>
              About
            </a>
          </li>
          <li className="link">
            <a href="#">
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
