import React, { useState } from "react";
// import Home from "./component/home/home"
import Navbar from "./component/navbar/navbar";
import About from "./component/about/about";
import Project from "./component/Project/project";
import HomeSection from "./component/home/homeSection";
import Contact from "./component/contact/contact";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon, faPalette } from "@fortawesome/free-solid-svg-icons";

import "./App.css";
import { useEffect } from "react";
function App() {
  const [themeOpen, setThemeOpen] = useState(false);
  const [activeTheme, setActiveTheme] = useState("light");
  const [activeStyle, setActivateStyle] = useState("color-1");
  useEffect(() => {
    const currentTheme = localStorage.getItem("theme-color");
    if (currentTheme) setActivateStyle(currentTheme);
    // else setActivateStyle("")
    const currentLightDark = localStorage.getItem("theme-light-dark");
    if (currentLightDark) setActiveTheme(currentLightDark);
  });
  const setStyle = (theme) => {
    setActivateStyle(theme);
    localStorage.setItem("theme-color", theme);
  };
  const setTheme = () => {
    setActiveTheme(activeTheme === "light" ? "dark" : "light");
    localStorage.setItem(
      "theme-light-dark",
      activeTheme === "light" ? "dark" : "light"
    );
  };
  const handleOpen = () => {
    setThemeOpen(themeOpen === true ? false : true);
  };
  return (
    <div className={`theme-${activeTheme}`}>
      <div className={`main-container-${activeStyle}`}>
        <Navbar />
        <div className={themeOpen ? "style-switcher" : "style-switcher-close"}>
          <div className="style-switcher-toggler s-icon">
            <FontAwesomeIcon
              icon={faPalette}
              onClick={() => handleOpen()}
            ></FontAwesomeIcon>
          </div>
          <div className="day-night s-icon">
            <FontAwesomeIcon
              onClick={() => setTheme()}
              icon={activeTheme === "light" ? faMoon : faSun}
            ></FontAwesomeIcon>
          </div>
          <h4>Theme Colors</h4>
          <div className="colors">
            <span
              className="color-1"
              onClick={() => setStyle("color-1")}
            ></span>
            <span
              className="color-2"
              onClick={() => setStyle("color-2")}
            ></span>
            <span
              className="color-3"
              onClick={() => setStyle("color-3")}
            ></span>
            <span
              className="color-4"
              onClick={() => setStyle("color-4")}
            ></span>
            <span
              className="color-5"
              onClick={() => setStyle("color-5")}
            ></span>
          </div>
        </div>

        <div className="main-content">
          <HomeSection />
          <About />
          <Project />
          <Contact />
        </div>
      </div>
    </div>
  );
}

export default App;
