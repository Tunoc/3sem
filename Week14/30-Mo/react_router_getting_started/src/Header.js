import React from "react";
import { Link, NavLink } from "react-router-dom";
function Header() {
  return (
    <ul className="header">
      <li>
        <NavLink exact to="/">
          Home
        </NavLink>
        {/* <Link to="/">Home</Link> */}
      </li>
      <li>
        <NavLink exact to="/count">
          Count
        </NavLink>
        {/* <Link to="/about">About</Link> */}
      </li>
      <li>
        <NavLink exact to="/clock">
          Clock
        </NavLink>
        {/* <Link to="/dashboard">Dashboard</Link> */}
      </li>
    </ul>
  );
}
export default Header;
