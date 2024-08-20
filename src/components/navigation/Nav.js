import logo from "../../assets/logo.png";
import "@theme-toggles/react/css/Expand.css";
import { Expand as ThemeToggleButton } from "@theme-toggles/react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { useEffect, useState } from "react";

import "./Nav.css";

export default function Nav({ isThemeToggled, setIsThemeToggle }) {
  return (
    <nav className="nav">
      <Logo />
      <ThemeToggleButton
        className={`theme-toggle-button ${
          isThemeToggled
            ? "theme-toggle-button-dark"
            : "theme-toggle-button-light"
        }`}
        duration={500}
        toggled={isThemeToggled}
        toggle={setIsThemeToggle}
      />
      <NavLinks />
    </nav>
  );
}

function Logo() {
  return (
    <a href="#" className="logo">
      <img src={logo} alt="logo-img" />
    </a>
  );
}

function NavLinks() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  //Reset isMobileMenuOpen state when window width is greater than 720
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      if (window.innerWidth > 720) {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="NavLinks">
      <ul className={`navlinks-menu ${isMobileMenuOpen ? "active" : ""}`}>
        <li className="NavLinks-item">
          <a href="/#About">About</a>
        </li>
        <li className="NavLinks-item">
          <a href="/#Work">My Work</a>
        </li>
        <li className="NavLinks-item">
          <a href="/#Skills">Skills</a>
        </li>
        <li className="NavLinks-item">
          <a href="/#Contact">Contact</a>
        </li>
      </ul>

      {isMobileMenuOpen ? (
        <AiOutlineClose
          onClick={() => setIsMobileMenuOpen(false)}
          className="mobile-btn"
          size={20}
        />
      ) : (
        <AiOutlineMenu
          onClick={() => setIsMobileMenuOpen(true)}
          className="mobile-btn"
          size={20}
        />
      )}
    </div>
  );
}
