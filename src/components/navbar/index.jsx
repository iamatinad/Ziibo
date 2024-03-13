import React from "react";
import { Link } from "react-router-dom";
import Browsecomponents from "../browse";
import Searchbar from "../searchbar";
import Signup from "../signup";
import "./index.css"; 
// import logoImage from "../../assets/images/logo.png";

function Navbar() {
  return (
    <div className="nav_button_link">
      <nav>
        <ul>
          <li>
            {/* <img src={logoImage} alt="Logo" className={styles.logo} /> */}
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
