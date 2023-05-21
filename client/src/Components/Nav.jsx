import React, { useState } from "react";
import "./Nav.css";

import Hamburger from "../Icons/hamburger.svg";
import { useNavigate } from "react-router-dom";

const Nav = () => {
  const navigate = useNavigate();
  const [nav, setNav] = useState(false);
  const handleMenu = () => {
    const hamburger = document.getElementById("NavId");
    if (window.innerWidth < 880) {
      if (!nav) {
        hamburger.style.transform = "translate(0, 0)";
        setNav(true);
      } else {
        hamburger.style.transform = "translate(-100%, 0)";
        setNav(false);
      }
    }
  };

  return (
    <div className="NavWrapper">
      <div className="Nav center-div">
        <div className="Nav_logo">
          <a href="/">EMS Academy</a>
        </div>
        <div className="NavBg" id="NavId" onClick={handleMenu}>
          <ul>
            <div className="NavLogo" onClick={() => navigate("/")}>
              EMS Academy
            </div>
            <li>
              <a href="/">Main</a>
            </li>
            <li>
              <a href="/result">Result</a>
            </li>
            <li>
              <a href="/shots">Shots</a>
            </li>
            <li>
              <a href="https://emslibrary.com">EMS Library</a>
            </li>
          </ul>
        </div>
        <img src={Hamburger} alt="Hamburger" onClick={handleMenu} />
      </div>
    </div>
  );
};

export default Nav;
