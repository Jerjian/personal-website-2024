//import css
import "./Main.css";
import ProfileHeader from "./ProfileHeader";

export default function Main({ isThemeToggled, theme }) {
  return (
    <div className="main">
      <ProfileHeader isThemeToggled={isThemeToggled} theme={theme} />
    </div>
  );
}
