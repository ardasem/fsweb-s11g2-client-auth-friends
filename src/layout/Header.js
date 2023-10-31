import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom";
import "../styles/header.css";

function Header() {
  return (
    <header>
      <div className="header--container">
        <h1 className="heading">FRIENDS DATABASE</h1>

        <nav className="navbar--container">
          <Link className="link" to="/">
            {" "}
            LOGIN.
          </Link>
          <Link className="link" to="/friends">
            {" "}
            FRIENDSLIST.
          </Link>
          <Link className="link" to="/add-friends">
            {" "}
            ADDFRIEND.
          </Link>
          <a className="link logout" onClick={()=>console.log("LOGOUT")}>
            {" "}
            LOGOUT.
          </a>
        </nav>
      </div>
    </header>
  );
}

export default Header;
