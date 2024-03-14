import React from "react";
import { Link } from "react-router-dom";
import Browsecomponents from "../browse";
import Searchbar from "../searchbar";
import Signup from "../signup";
import "./index.css";
import logo from '../../assets/images/logo.png'

function Navbar() {
  return (

    <nav className="nav_menu">
      <img src={logo.src} />
      <div>
        <Link to="/">Home</Link>
        <Browsecomponents />
      </div>

      <div className="nav_right">
        <Searchbar />
        <Signup />
      </div>

    </nav>

  );
}

export default Navbar;
