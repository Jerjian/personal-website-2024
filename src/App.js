import { useState, useEffect } from "react";
import "./App.css";
import Nav from "./components/navigation/Nav";
import Main from "./components/main/Main";

function App() {
  const [isThemeToggled, setIsThemeToggle] = useState(true);

  return (
    <div className={`app ${isThemeToggled ? "dark-mode" : "light-mode"}`}>
      <Nav
        isThemeToggled={isThemeToggled}
        setIsThemeToggle={setIsThemeToggle}
      />
      <Main />
    </div>
  );
}

export default App;
