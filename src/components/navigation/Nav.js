import logo from "../../assets/logo.png";
import "@theme-toggles/react/css/Expand.css";
import { Expand as ThemeToggleButton } from "@theme-toggles/react";
import "./Nav.css";

export default function Nav({ isThemeToggled, setIsThemeToggle }) {
  return (
    <nav className={`nav ${isThemeToggled ? "dark-mode" : ""}`}>
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
    <a href="#" classgiName="logo">
      <img src={logo} alt="logo-img" />
    </a>
  );
}

function NavLinks() {
  return (
    <ul className="NavLinks">
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
  );
}
