//import css
import "./Main.css";
import ProfileHeader from "./ProfileHeader";
import Work from "./Work";
// import ContactForm from "../contact/ContactForm";
import ContactForm from "../contact/ContactForm";

export default function Main({ isThemeToggled, theme }) {
  return (
    <div className="main">
      <ProfileHeader isThemeToggled={isThemeToggled} theme={theme} />
      <Work isThemeToggled={isThemeToggled} theme={theme} />
      <ContactForm isThemeToggled={isThemeToggled} theme={theme} />
    </div>
  );
}
