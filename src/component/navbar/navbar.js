import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faXmark,
  faHouse,
  faUser,
  faComments,
  faBriefcase,
} from "@fortawesome/free-solid-svg-icons";
import "./navbar.css";

function Navbar() {
  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(sidebar === true ? false : true);
  const asideData = [
    { title: "Home", path: "#home", icon: faHouse, cName: "nav-text" },
    { title: "About", path: "#about", icon: faUser, cName: "nav-text" },
    {
      title: "Projects",
      path: "#projects",
      icon: faComments,
      cName: "nav-text",
    },
    {
      title: "Contact",
      path: "#contact",
      icon: faBriefcase,
      cName: "nav-text",
    },
  ];

  return (
    <div className="navbar">
      <div className="menu-bars">
        <FontAwesomeIcon icon={faBars} onClick={showSidebar} />
      </div>
      <nav className={sidebar ? "nav-menu-active" : "nav-menu"}>
        <div className="nav-toggle"></div>
        <ul className="nav-menu-items" onClick={showSidebar}>
          <li className="navbar-toggle">
            <a href="#home" className="menu-bars">
              <FontAwesomeIcon icon={faXmark}></FontAwesomeIcon>
            </a>
          </li>
          {asideData &&
            asideData.map((data, index) => (
              <li key={index} className={data.cName}>
                <a href={data.path}>
                  <FontAwesomeIcon
                    className="fa"
                    icon={data.icon}
                  ></FontAwesomeIcon>
                  <span className="aside-section">{data.title}</span>
                </a>
              </li>
            ))}
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
