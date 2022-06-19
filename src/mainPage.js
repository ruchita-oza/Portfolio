import React from "react";

function mainPage() {
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

export default mainPage;
