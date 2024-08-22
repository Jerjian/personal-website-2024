import { useState, useEffect } from "react";
import "./App.css";
import Nav from "./components/navigation/Nav";
import Main from "./components/main/Main";
import { createTheme } from "@mui/material/styles";
import { blue } from "@mui/material/colors";

function App() {
  const [isThemeToggled, setIsThemeToggle] = useState(true);
  const theme = createTheme({
    palette: {
      primary: {
        light: blue[300],
        main: blue[500],
        dark: blue[700],
        darker: blue[900],
      },
    },
  });

  return (
    <div className={`app ${isThemeToggled ? "dark-mode" : "light-mode"}`}>
      <Nav
        isThemeToggled={isThemeToggled}
        setIsThemeToggle={setIsThemeToggle}
      />
      <Main isThemeToggled={isThemeToggled} theme={theme} />
    </div>
  );
}

export default App;

