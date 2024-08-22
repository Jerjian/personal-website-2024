import profilePicture from "../../assets/Jerjian_Christian_skype.jpg";
import Button from "@mui/material/Button";
import { ThemeProvider } from "@mui/material/styles";
import { useEffect, useState } from "react";
import { IconButton } from "@mui/material";

import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";

export default function ProfileHeader({ isThemeToggled, theme }) {
  const [isAboutMeToggled, setIsAboutMeToggled] = useState(false);
  const [isBackButtonToggled, setIsBackButtonToggled] = useState(false);

  function handleAboutMe() {
    setIsBackButtonToggled(false);
    setIsAboutMeToggled(true);
    const pfpImg = document.querySelector(".profile-picture");
    const aboutMeButton = document.querySelector(".about-me-button");
    const profileHeaderUpperHalf = document.querySelector(
      ".profile-header-upper-half"
    );

    pfpImg.classList.remove("fadeIn-animation");
    aboutMeButton.classList.remove("fadeIn-animation");

    pfpImg.classList.add("slideInRightPfp-animation");
    profileHeaderUpperHalf.classList.add("active");
  }

  function handleBackButton() {
    setIsAboutMeToggled(false);
    setIsBackButtonToggled(true);
  }

  useEffect(() => {
    if (!isBackButtonToggled) return;
    const profileHeaderUpperHalf = document.querySelector(
      ".profile-header-upper-half"
    );
    const pfpImg = document.querySelector(".profile-picture");
    const aboutMeButton = document.querySelector(".about-me-button");

    pfpImg.classList.remove("slideInRightPfp-animation");
    pfpImg.classList.add("fadeIn-animation");
    profileHeaderUpperHalf.classList.add("remove");
    aboutMeButton.classList.add("fadeIn-animation");
  }, [isBackButtonToggled]);

  //on Mount, add fade in animation to profile picture and about me button
  useEffect(() => {
    const pfpImg = document.querySelector(".profile-picture");
    const aboutMeButton = document.querySelector(".about-me-button");
    pfpImg.classList.add("fadeIn-animation");
    aboutMeButton.classList.add("fadeIn-animation");
  }, []);

  return (
    <div className="profile-header">
      <div className="profile-header-upper-half">
        <ProfilePicture />

        {isAboutMeToggled ? (
          <AboutMeCard>
            <StyledButton
              isThemeToggled={isThemeToggled}
              onClick={handleBackButton}
              theme={theme}
              width={70}
              height={40}
              className="back-button"
            >
              Back
            </StyledButton>

            <h1>About Me</h1>
            <DetailedText />
          </AboutMeCard>
        ) : (
          <StyledButton
            isThemeToggled={isThemeToggled}
            theme={theme}
            onClick={handleAboutMe}
            width={105}
            height={50}
            className="about-me-button"
          >
            About Me
          </StyledButton>
        )}
      </div>
      {!isAboutMeToggled && <IntroductoryText />}
    </div>
  );
}

function ProfilePicture() {
  return (
    <img className="profile-picture" src={profilePicture} alt="profile-img" />
  );
}
function StyledButton({
  isThemeToggled,
  theme,
  onClick,
  width,
  height,
  className,
  children,
}) {
  return (
    <div className={className} onClick={onClick}>
      <ThemeProvider theme={theme}>
        <Button
          variant="contained"
          sx={{
            bgcolor: isThemeToggled ? "primary.darkest" : "primary.main",
            width: width,
            height: height,
          }}
        >
          {children}
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
      <h1 className="introductory-heading-2">I'm a Full Stack Developper.</h1>
    </div>
  );
}

function AboutMeCard({ children }) {
  return (
    <div className="about-me-card">
      {/* <h1>About Me</h1> */}
      {children}
    </div>
  );
}

function DetailedText() {
  return (
    <div className="detailed-text">
      <p>
        I am an Accountant turned Software developer! After graduating from the
        University of Concordia with a Bachelors in Commerce (Major in
        Accountancy, Minor in Finance), the Covid-19 pandemic just started, and
        I developed a passion for building products that deliver value. Shortly
        before pursuing Computer Science, I came across a Chrome Extension
        called Tab for a Cause. This extension essentially adds unintrusive
        advertisements to every tab you open. The catch is that the
        advertisement profits will be donated to any cause you wish! I was, and
        still am, so enthusiastic about the ability for a single individual to
        leverage the internet and web apps to deliver value to the world. I
        wanted to deliver the same kind of tangible value, and my joy for
        building useful things made me decide to pursue a second degree in
        Computer Science. I still have a special interest in businesses and
        investing, which will be demonstrated by some of my projects down below
      </p>
    </div>
  );
}
