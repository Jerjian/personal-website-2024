//import css
import "./Main.css";
import ProfileHeader from "./ProfileHeader";
import Work from "./Work";
import Bio from "../bio/bio";

export default function Main({ isThemeToggled, theme }) {
  return (
    <div className="main">
      <ProfileHeader isThemeToggled={isThemeToggled} theme={theme} />
      <Work isThemeToggled={isThemeToggled} theme={theme} />
      <Bio />
    </div>
  );
}
