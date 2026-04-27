import React, { useState, useEffect } from "react";
import "./style.css";
import { VscGrabber, VscClose } from "react-icons/vsc";
import { Link } from "react-router-dom";
import { logotext } from "../../content_option";
// import Themetoggle from "../components/themetoggle";

const Headermain = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const handleToggle = () => {
    setMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    if (isMenuOpen) {
      document.body.classList.add("ovhidden");
    } else {
      document.body.classList.remove("ovhidden");
    }
  }, [isMenuOpen]);

  return (
    <>
      <header className="fixed-top p-2 bg-black/50 backdrop-blur-sm md:bg-transparent md:backdrop-blur-none">
        <div className="d-flex align-items-center justify-content-between">
          <Link className="navbar-brand nav_ac bg-black bg-opacity-50" to="/">
            {logotext}
          </Link>
          <div className="d-flex align-items-center">
            {/* /////////////////////////////////////////// */}
            {/* Uncomment this line to enable theme toggle */}
            {/* /////////////////////////////////////////// */}
            {/* <Themetoggle /> */}
            <button className="menu__button  nav_ac d-flex align-items-center justify-content-center" onClick={handleToggle}>
              {isMenuOpen ? <VscClose /> : <VscGrabber />}
            </button>
          </div>
        </div>
      </header>
      <div className={`site__navigation ${isMenuOpen ? "menu__opend" : ""}`}>
        <div className="bg__menu h-100">
          <div className="menu__wrapper">
            <div className="menu__container p-3">
              <ul className="the_menu hover:text-highlight-light">
                <li className="menu_item ">
                  <Link onClick={handleToggle} to="/" className="my-3">Home</Link>
                </li>
                <li className="menu_item">
                  <Link onClick={handleToggle} to="/resume" className="my-3"> Resume</Link>
                </li>
                <li className="menu_item">
                  <Link onClick={handleToggle} to="/about" className="my-3">About</Link>
                </li>
                <li className="menu_item">
                  <Link onClick={handleToggle} to="/demo" className="my-3">Demo</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="br-top"></div>
      <div className="br-bottom"></div>
      <div className="br-left"></div>
      <div className="br-right"></div> */}

    </>
  );
};

export default Headermain;
