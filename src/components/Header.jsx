import React from "react";
import "./Header.css";
import logo from "../assets/evgenef_Logo.png";

const handleNav = (e, id) => {
  e.preventDefault();
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: "smooth", block: "start" });
    window.history.pushState(null, "", `#${id}`);
  }
};

export default function Header() {
  return (
    <header className="site-header">
      <div className="header-inner">
        <a className="brand" href="#home" aria-label="Go to home">
          <img className="brand-logo" src={logo} alt="site-logo" />
        </a>

        <nav className="nav">
          <a href="#home" onClick={(e) => handleNav(e, "home")}>
            Home
          </a>
          <a href="#about" onClick={(e) => handleNav(e, "about")}>
            About
          </a>
          <a href="#skills" onClick={(e) => handleNav(e, "skills")}>
            Skills
          </a>
          <a href="#contact" onClick={(e) => handleNav(e, "contact")}>
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
}
