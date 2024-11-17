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
import profilePicture from "../../assets/Jerjian_Christian_skype.jpg";

import "./ContactForm.css";

import { useState } from "react";

export default function ContactForm({ theme, isThemeToggled }) {
  const [formData, setFormData] = useState({
    name: "",
    message: "",
  });

  function handleInputChange(e) {
    const name = e.target.name;
    const value = e.target.value;
    console.log(name, value);
    setFormData((prev) => {
      return { ...prev, [name]: value };
    });
  }
  function handleSubmit(e) {
    e.preventDefault();
    const { name, message } = formData;
    const subject = `Contact from ${name}`;
    const body = `${message}`;

    // // Create the mailto link
    // const mailtoLink = `mailto:christianjerjian@gmail.com?subject=${encodeURIComponent(
    //   subject
    // )}&body=${encodeURIComponent(body)}`;

    // // Try to open mailto link in a new window
    // const mailWindow = window.open(mailtoLink);

    // // If window.open returns null or undefined, the popup was blocked or failed
    // if (!mailWindow) {
    // }
    const fullMessage = `To: christianjerjian@gmail.com\nSubject: Contact from ${name}\n\nMessage:\n${message}`;
    navigator.clipboard.writeText(fullMessage);
    alert(
      "Unable to open your email client. The message has been copied to your clipboard."
    );

    // Clear form
    setFormData({
      name: "",
      message: "",
    });
  }

  function handleClick(link) {
    window.open(link);
  }

  return (
    <div className="contact-form" id="contact-form">
      <h1>Contact Me</h1>
      <Card
        className="contact-form-card"
        sx={{
          width: 340,
          maxWidth: "100%",
          boxShadow: "lg",
        }}
      >
        <CardContent sx={{ alignItems: "center", textAlign: "center" }}>
          <Avatar src={profilePicture} sx={{ "--Avatar-size": "4rem" }} />
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
          <Typography className="contact-form-name" level="title-lg">
            Christian Jerjian
          </Typography>
          <Typography
            className="contact-form-description"
            level="body-sm"
            sx={{ maxWidth: "24ch" }}
          >
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
            <Input
              placeholder="Your Name"
              fullWidth
              name="name"
              value={formData.name}
              required
              onChange={(e) => handleInputChange(e)}
            />
            <Input
              placeholder="Your Message"
              fullWidth
              multiline
              rows={4}
              name="message"
              value={formData.message}
              onChange={(e) => handleInputChange(e)}
              required
            />
            <Button
              variant="contained"
              sx={{
                backgroundColor: isThemeToggled
                  ? theme.palette.primary.dark
                  : theme.palette.primary.main,
              }}
              onClick={handleSubmit}
            >
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
              onClick={() =>
                handleClick("https://www.linkedin.com/in/christianjerjian/")
              }
              sx={{
                fontSize: 20,
                color: isThemeToggled ? "#FFFFFF" : "#171515",
                cursor: "pointer",
              }}
            />
          </Tooltip>
        </CardActions>
      </Card>
    </div>
  );
}
