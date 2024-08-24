import "./Work.css";
import { useEffect, useState } from "react";
import AspectRatio from "@mui/joy/AspectRatio";
import Box from "@mui/joy/Box";
import Button from "@mui/material/Button";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import CardCover from "@mui/joy/CardCover";
import CardActions from "@mui/joy/CardActions";
import CardOverflow from "@mui/joy/CardOverflow";
import IconButton from "@mui/joy/IconButton";
import CodeIcon from "@mui/icons-material/Code";
import Typography from "@mui/joy/Typography";
import GitHubIcon from "@mui/icons-material/GitHub";
import projectsData from "../../data/projects";
import Tooltip from "@mui/material/Tooltip";
import { ThemeProvider } from "@mui/material/styles";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

export default function Work({ theme, isThemeToggled }) {
  //   backgroundColor: isThemeToggled
  // ? theme.palette.primary.dark
  // : theme.palette.primary.main,

  const [projects, setProjects] = useState(projectsData);
  const projectsCards = projects.map((project) => (
    <WorkCard
      key={project.id}
      project={project}
      isThemeToggled={isThemeToggled}
      theme={theme}
    />
  ));

  return (
    <div className="work">
      <h1>My Work</h1>
      <Carousel
        responsive={{
          desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3,
            partialVisibilityGutter: 40,
          },
          tablet: {
            breakpoint: { max: 1024, min: 720 },
            items: 2,
            partialVisibilityGutter: 30,
          },
          mobile: {
            breakpoint: { max: 720, min: 0 },
            items: 1,
            partialVisibilityGutter: 30,
          },
        }}
        additionalTransform={0}
        arrows
        autoPlaySpeed={3000}
        centerMode={false}
        className=""
        containerClass="container-with-dots"
        dotListClass=""
        draggable
        focusOnSelect={false}
        infinite
        initialSlide={0}
        itemClass=""
        keyBoardControl
        minimumTouchDrag={80}
        pauseOnHover
        renderArrowsWhenDisabled={false}
        renderButtonGroupOutside={false}
        renderDotsOutside={false}
        rewind={false}
        rewindWithAnimation={false}
        rtl={false}
        shouldResetAutoplay
        showDots={false}
        sliderClass=""
        slidesToSlide={1}
        swipeable
      >
        {projectsCards}
      </Carousel>
    </div>
  );
}

function WorkCard({ project, isThemeToggled, theme }) {
  function handleGithubClick() {
    window.open(project.githubLink);
  }

  return (
    <Card
      variant="outlined"
      sx={{
        minWidth: 250,
        maxWidth: 350,
        minHeight: 500,
        overflow: "auto",
        display: "flex",
        flexDirection: "column",
      }}
      className="work-card"
    >
      <CardOverflow>
        <AspectRatio ratio="2">
          <img
            src={project.image}
            srcSet="https://images.unsplash.com/photo-1532614338840-ab30cf10ed36?auto=format&fit=crop&w=318&dpr=2 2x"
            alt={project.title + " image"}
          />
        </AspectRatio>
      </CardOverflow>
      <CardContent>
        <div className="card-content">
          <div className="work-card-project">
            <Typography className="work-card-project-title" level="title-lg">
              {project.title}
            </Typography>
            <Typography
              className="work-card-project-description"
              level="body-sm"
            >
              {project.description}
            </Typography>
          </div>
          <div className="work-card-technology">
            <Typography
              className="work-card-technologies-title"
              level="title-lg"
            >
              Technologies
            </Typography>
            <Typography
              className="work-card-technologies-items"
              level="body-sm"
            >
              {project.technologies.join(", ")}
            </Typography>
          </div>
          <div className="work-card-button-section">
            <CardActions
              className="work-card-button-section-items"
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
                gap: "4rem",
              }}
            >
              {project.githubLink && (
                <Tooltip title="Open in GitHub">
                  <GitHubIcon
                    onClick={handleGithubClick}
                    sx={{
                      fontSize: 20,
                      color: isThemeToggled ? "#FFFFFF" : "#171515",
                      cursor: "pointer",
                    }}
                  />
                </Tooltip>
              )}

              <ThemeProvider theme={theme}>
                {project.deployedLink ? (
                  <Button
                    variant="outlined"
                    sx={{
                      color: isThemeToggled
                        ? theme.palette.primary.darker
                        : theme.palette.primary.main,
                      width: 130,
                      height: 45,
                      borderColor: isThemeToggled
                        ? theme.palette.primary.darker
                        : theme.palette.primary.main,
                      borderWidth: 2,
                    }}
                    onClick={() => window.open(project.deployedLink)}
                  >
                    Check it out
                  </Button>
                ) : (
                  <Button
                    variant="outlined"
                    disabled
                    sx={{
                      color: isThemeToggled
                        ? theme.palette.primary.darker
                        : theme.palette.primary.main,
                      width: 130,
                      height: 45,
                      borderColor: isThemeToggled
                        ? theme.palette.primary.darker
                        : theme.palette.primary.main,
                      borderWidth: 2,
                    }}
                  >
                    Depreciated
                  </Button>
                )}
              </ThemeProvider>
            </CardActions>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
