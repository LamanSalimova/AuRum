import React, { useState } from "react";
import "./navbar.css";
import { AiOutlineRight } from "react-icons/ai";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link as RouterLink, NavLink } from "react-router-dom";
import { ROUTES } from "../../routes";

export default function Navbar() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  return (
    <nav>
      <ul className={click ? "active" : ""}>
        <li>
          <NavLink to={ROUTES.HOME}>Ana səhifə</NavLink>
        </li>
        <li>
          <NavLink to={ROUTES.ABOUT}>Haqqımızda</NavLink>
        </li>
        <div className="dropDownMenu">
          <div className="routerLink">
            Xidmətlər <AiOutlineRight />
            <div className="dropDownList">
              <li>
                <NavLink to={ROUTES.AGENCY}>Ship Agency</NavLink>
              </li>
              <li>
                <NavLink to={ROUTES.PORTSERVICE}>Port Service</NavLink>
              </li>
            </div>
          </div>
        </div>
        <li>
          <NavLink to={ROUTES.SHIPS}>Gəmilər</NavLink>
        </li>
        <li>
          <NavLink to={ROUTES.BLOGS}>Blog</NavLink>
        </li>
        <li>
          <NavLink to={ROUTES.GALLERY}>Qalereya</NavLink>
        </li>
        <li>
          <NavLink to={ROUTES.CONTACT}>Əlaqə</NavLink>
        </li>
      </ul>
      <div className="hamburger" onClick={handleClick}>
        {click ? (
          <FaTimes color="#FFF" size={30} />
        ) : (
          <FaBars color="#FFF" size={30} />
        )}
      </div>
    </nav>
  );
}
