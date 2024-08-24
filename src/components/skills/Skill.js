export default function Skill({ isThemeToggled, theme }) {
  return (
    <div className="skill">
      <div className="skill-icon">
        <img src={skill.icon} alt={skill.name} />
      </div>
      <div className="skill-name">
        <h3>{skill.name}</h3>
      </div>
    </div>
  );
}

function SkillCard({ skill, isThemeToggled, theme }) {
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
      className="skill-card"
    >
      <CardOverflow>
        <AspectRatio ratio="2">
          <img
            src={skill.image}
            srcSet="https://images.unsplash.com/photo-1532614338840-ab30cf10ed36?auto=format&fit=crop&w=318&dpr=2 2x"
            alt={skill.name + " image"}
          />
        </AspectRatio>
      </CardOverflow>
      <CardContent>
        <div className="card-content">
          <div className="skill-card-skill">
            <Typography className="skill-card-skill-name" level="title-lg">
              {skill.name}
            </Typography>
            <Typography
              className="skill-card-skill-description"
              level="body-sm"
            >
              {skill.description}
            </Typography>
          </div>
          <div className="skill-card-technology">
            <Typography
              className="skill-card-technologies-title"
              level="title-lg"
            >
              Technologies
            </Typography>
            <Typography
              className="skill-card-technologies-items"
              level="body-sm"
            >
              {skill.technologies.join(", ")}
            </Typography>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
