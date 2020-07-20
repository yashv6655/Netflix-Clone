import React, { useEffect, useState } from "react";
import "./Navbar.css";

export default function Navbar() {
  const [show, handleShow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else handleShow(false);
    });
    return () => {
      window.removeEventListener("scroll");
    };
  }, []);

  return (
    <div className={`nav ${show && "nav__black"}`}>
      <img
        className="nav__logo"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/170px-Netflix_2015_logo.svg.png"
        alt="Logo"
      />

      <img
        className="nav__avatar"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcStZLAPYXX9lnfvA0Avz3WU8E-rsXfVo8Vwrw&usqp=CAU"
        alt="Avatar"
      />

      {/*  */}
    </div>
  );
}
