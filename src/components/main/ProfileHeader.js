import profilePicture from "../../assets/Jerjian_Christian_skype.jpg";
import Button from "@mui/material/Button";
import resumePDF from "../../assets/ChristianJerjianResume2024.pdf";
import transcriptPDF from "../../assets/ConcordiaTranscriptFinal.pdf";
import { ThemeProvider } from "@mui/material/styles";
import { useEffect, useState } from "react";
import { IconButton } from "@mui/material";

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
  function handleViewMyWork() {
    const work = document.querySelector(".work");
    work.scrollIntoView({ behavior: "smooth" });
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
    <div className="profile-header" id="profile-header">
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
            <div className="trancripts">
              <TranscriptButton theme={theme} isThemeToggled={isThemeToggled}>
                Transcript
              </TranscriptButton>
            </div>
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
      <div className="profile-header-lower-half">
        <StyledButton
          isThemeToggled={isThemeToggled}
          theme={theme}
          onClick={handleViewMyWork}
          width={140}
          height={50}
          className="view-my-work-button"
          variant="outlined"
        >
          View My Work
        </StyledButton>
        <StyledButton
          isThemeToggled={isThemeToggled}
          theme={theme}
          onClick={() => {
            window.open(resumePDF, "_blank");
          }}
          width={140}
          height={50}
          className="view-my-work-button"
          variant="outlined"
        >
          resume
        </StyledButton>
      </div>
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
  variant = "contained",
  children,
}) {
  const baseStyles = {
    width: width,
    height: height,
  };

  const variantStyles =
    variant === "outlined"
      ? {
          borderColor: isThemeToggled
            ? theme.palette.primary.darker
            : theme.palette.primary.main,
          borderWidth: 2,
        }
      : {
          backgroundColor: isThemeToggled
            ? theme.palette.primary.dark
            : theme.palette.primary.main,
        };

  return (
    <div className={className} onClick={onClick}>
      <ThemeProvider theme={theme}>
        <Button variant={variant} sx={{ ...baseStyles, ...variantStyles }}>
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
  return <div className="about-me-card">{children}</div>;
}

function DetailedText() {
  return (
    <div className="detailed-text">
      <p>
        I'm a software developer with a background in Accounting and Finance,
        now dedicated to harnessing technology to drive meaningful impact. I
        hold two undergraduate degrees from Concordia University, earning both
        with distinction: a Bachelor's in Commerce (Major in Accountancy and
        Minor in Finance) and a Bachelor's in Computer Science. With a strong
        foundation in business and a passion for technology, I create software
        solutions that are both functional and valuable. As a full-stack web
        developer intern at Fix Network, I utilized technologies like ABP
        framework, C#, Blazor, and .NET to build robust web applications. I'm
        committed to ongoing learning and growth, driven to make a lasting
        impact through software.
      </p>
    </div>
  );
}

function TranscriptButton({ children, isThemeToggled, theme }) {
  return (
    <StyledButton
      isThemeToggled={isThemeToggled}
      theme={theme}
      onClick={() => {
        window.open(transcriptPDF, "_blank");
      }}
      width={150}
      height={50}
      className="view-my-work-button"
      variant="outlined"
    >
      {children}
    </StyledButton>
  );
}
