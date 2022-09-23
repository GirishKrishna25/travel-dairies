import React from "react";
import world_icon from "../icons/worldwide.png";

export default function Header() {
  return (
    <>
      <header className="header">
        <h1 className="header--title">
          Travel
          <img
            className="header--icon"
            src={world_icon}
            alt="world icon"
            width="24px"
          />
          Dairies
        </h1>
      </header>
    </>
  );
}
