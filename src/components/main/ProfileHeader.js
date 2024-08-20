import profilePicture from "../../assets/Jerjian_Christian_skype.jpg";
import Button from "@mui/material/Button";
import { ThemeProvider } from "@mui/material/styles";

export default function ProfileHeader({ theme }) {
  return (
    <div className="profile-header">
      <div className="profile-header-upper-half">
        <ProfilePicture />
        <AboutMeButton theme={theme} />
      </div>

      <IntroductoryText />
    </div>
  );
}

function ProfilePicture() {
  return (
    <img className="profile-picture" src={profilePicture} alt="profile-img" />
  );
}
function AboutMeButton({ theme }) {
  return (
    <div className="about-me-button">
      <ThemeProvider theme={theme}>
        <Button
          variant="contained"
          sx={{ bgcolor: `primary.main`, width: 105, height: 50 }}
        >
          About Me
        </Button>
      </ThemeProvider>
    </div>
  );
}
function IntroductoryText() {
  return (
    <div className="introductory-text">
      <h1 className="introductory-heading-1">
        Hi I'm <span>Christian</span>.
      </h1>
      <h2 className="introductory-heading-2">I'm a Full Stack Developper.</h2>
    </div>
  );
}
