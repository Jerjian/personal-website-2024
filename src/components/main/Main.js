//import css
import "./Main.css";
import ProfileHeader from "./ProfileHeader";
import Work from "./Work";

export default function Main({ isThemeToggled, theme }) {
  return (
    <div className="main">
      <ProfileHeader isThemeToggled={isThemeToggled} theme={theme} />
      <Work />
    </div>
  );
}
