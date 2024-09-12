import React, { useState } from "react";
import "./Header.css";

function Header({
  onHomeClick,
  onAboutClick,
  onArchClick,
  onProdClick,
  onContactClick,
}) {
  const [prCategories, setPrCategories] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  function handleProjects() {
    if (prCategories) {
      setIsAnimating(true);
      setTimeout(() => {
        setPrCategories(false);
        setIsAnimating(false);
      }, 500);
    } else {
      setPrCategories(true);
      setIsAnimating(false);
    }
  }

  function closeCategories() {
    if (prCategories) {
      setIsAnimating(true);
      setTimeout(() => {
        setPrCategories(false);
        setIsAnimating(false);
      }, 500);
    }
  }

  function handleHomeClick() {
    closeCategories();
    onHomeClick();
  }

  function handleAboutClick() {
    closeCategories();
    onAboutClick();
  }

  function handleContactClick() {
    closeCategories();
    onContactClick();
  }

  function handleArchClick() {
    closeCategories();
    onArchClick();
  }

  function handleProdClick() {
    closeCategories();
    onProdClick();
  }

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
            <a href="#" onClick={handleHomeClick}>
              Home
            </a>
          </li>
          <li className="pr_categories_button">
            <a href="#" onClick={handleProjects}>
              Projects
            </a>
            {prCategories && (
              <div className={`pr_categories ${isAnimating ? "slideUp" : "slideDown"}`}>
                <div className="pr_link_arch">
                  <a href="#" onClick={handleArchClick}>
                    Architecture
                  </a>
                </div>
                <div className="pr_link_prod">
                  <a href="#" onClick={handleProdClick}>
                    Product
                  </a>
                </div>
              </div>
            )}
          </li>
          <div className={`link_wrapper ${prCategories || isAnimating ? 'shiftDown' : ''}`}>
            <li className="link">
              <a href="#" onClick={handleAboutClick}>
                About
              </a>
            </li>
            <li className="link">
              <a href="#" onClick={handleContactClick}>
                Contact
              </a>
            </li>
          </div>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
