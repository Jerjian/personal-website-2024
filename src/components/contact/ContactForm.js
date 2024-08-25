import Avatar from "@mui/joy/Avatar";
import Chip from "@mui/joy/Chip";
import Box from "@mui/joy/Box";
import Button from "@mui/material/Button";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import CardOverflow from "@mui/joy/CardOverflow";
import CardActions from "@mui/joy/CardActions";
import IconButton from "@mui/joy/IconButton";
import Typography from "@mui/joy/Typography";
import Input from "@mui/joy/Input";
import SvgIcon from "@mui/joy/SvgIcon";
import ButtonGroup from "@mui/joy/ButtonGroup";
import { ThemeProvider } from "@mui/material/styles";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import Tooltip from "@mui/material/Tooltip";


import "./ContactForm.css";

export default function ContactForm({ theme, isThemeToggled }) {

  function handleClick(link) {
    window.open(link);
  }

  return (
    <Card
    className="contact-form"
      sx={{
        width: 340,
        maxWidth: "100%",
        boxShadow: "lg",
        }}
    >
      <CardContent sx={{ alignItems: "center", textAlign: "center" }}>
        <Avatar
          src="https://media.licdn.com/dms/image/v2/C4D03AQHoO3hox9JuOQ/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1592155381792?e=1729728000&v=beta&t=CEMSGJGZxiI_dlu2OHVRZCKjl0IrIg-dPSLsVS7yhb4"
          sx={{ "--Avatar-size": "4rem" }}
        />
        <Chip
          size="sm"
          variant="soft"
          color="primary"
          sx={{
            mt: -1,
            mb: 1,
            border: "3px solid",
            borderColor: "background.surface",
          }}
        >
          Montreal, Canada
        </Chip>
        <Typography className="contact-form-name" level="title-lg">Christian Jerjian</Typography>
        <Typography className="contact-form-description" level="body-sm" sx={{ maxWidth: "24ch" }}>
          Contact me at christianjerjian@gmail.com or use the form below.
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 2,
            mt: 2,
          }}
        >
          <Input placeholder="Your Name" fullWidth />
          <Input placeholder="Your Email" fullWidth />
          <Input placeholder="Your Message" fullWidth multiline rows={4} />
          <Button variant="contained"
          sx={{ backgroundColor: isThemeToggled
            ? theme.palette.primary.dark
            : theme.palette.primary.main }}>
            Send Message
          </Button>
        </Box>
      </CardContent>
      <CardActions className="card-actions">
        <Tooltip title="Open my GitHub">
          <GitHubIcon
            onClick={() => handleClick("https://github.com/Jerjian")}
            sx={{
              fontSize: 20,
              color: isThemeToggled ? "#FFFFFF" : "#171515",
              cursor: "pointer",
            }}
          />
        </Tooltip>

        <Tooltip title="Open my LinkedIn">
          <LinkedInIcon
            onClick={() => handleClick("https://www.linkedin.com/in/christianjerjian/")}
            sx={{
              fontSize: 20,
              color: isThemeToggled ? "#FFFFFF" : "#171515",
              cursor: "pointer",
            }}
          />
        </Tooltip>
      </CardActions>

    </Card>
  );
}

