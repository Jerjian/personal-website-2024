//import css
import "./Main.css";
import ProfileHeader from "./ProfileHeader";

export default function Main({ theme }) {
  return (
    <div className="main">
      <ProfileHeader theme={theme} />
    </div>
  ); 
}
