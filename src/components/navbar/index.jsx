import React from "react";
import { Link } from "react-router-dom";
import Browsecomponents from "../browse";
import Searchbar from "../searchbar";
import Signup from "../signup";
import "./index.css";

function Navbar() {
  return (
    <div className="nav_button_link">
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
            <Browsecomponents />
            <Searchbar />
            <Signup />
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
