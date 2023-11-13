import React from "react";
import Logo from "../assets/Logo.svg";
function Header() {
  return (
    <header>
      <nav>
        <img src={Logo} alt="" />
      </nav>
    </header>
  );
}

export default Header;
