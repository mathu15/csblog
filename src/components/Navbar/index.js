import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import "./style.css";

/**
 * @author
 * @function Navbar
 **/

const Navbar = (onSearch) => {
  return (
    <div className="wrapper">
      <nav>
        <input type="checkbox" id="show-search" />
        <input type="checkbox" id="show-menu" />
        <label htmlFor="show-menu" className="menu-icon">
          <i className="fas fa-bars"></i>
        </label>
        <div className="content">
          <div className="logo">
            <NavLink className="link" to="/">
              <img src={require("../../blogPostImages/logo.png")} />
            </NavLink>
          </div>
          <ul className="links">
            <li>
              <NavLink className="link" to="/">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink className="link" to="/all-blogs">
                All Blogs
              </NavLink>
            </li>
            {/* <li>
              <a href="#" className="desktop-link">
                Features
              </a>
              <input type="checkbox" id="show-features" />
              <label htmlFor="show-features">Features</label>
              <ul>
                <li>
                  <a href="#">Dropmenu 1</a>
                </li>
                <li>
                  <a href="#">Dropmenu 2</a>
                </li>
                <li>
                  <a href="#">Dropmenu 3</a>
                </li>
                <li>
                  <a href="#">Dropmenu 4</a>
                </li>
              </ul>
            </li> */}
            {/* <li>
              <a href="#" className="desktop-link">
                Services
              </a>
              <input type="checkbox" id="show-services" />
              <label htmlFor="show-services">Services</label>
              <ul>
                <li>
                  <a href="#">Dropmenu 1</a>
                </li>
                <li>
                  <a href="#">Dropmenu 2</a>
                </li>
                <li>
                  <a href="#">Dropmenu 3</a>
                </li>
                <li>
                  <a href="#" className="desktop-link">
                    More Items
                  </a>
                  <input type="checkbox" id="show-items" />
                  <label htmlFor="show-items">More Items</label>
                  <ul>
                    <li>
                      <a href="#">Submenu 1</a>
                    </li>
                    <li>
                      <a href="#">Submenu 2</a>
                    </li>
                    <li>
                      <a href="#">Submenu 3</a>
                    </li>
                  </ul>
                </li>
              </ul>
            </li> */}
            <li>
              <NavLink className="link" to="/">
                Features
              </NavLink>
            </li>
          </ul>
        </div>
        {/* <label htmlFor="show-search" className="search-icon">
          <i className="fas fa-search"></i>
        </label>
        <form action="#" className="search-box">
          <input
            type="text"
            placeholder="Type Something to Search..."
            required
            onClick={() => onSearch}
          />
          <button type="submit" className="go-icon">
            <i className="fas fa-long-arrow-alt-right"></i>
          </button>
        </form> */}
      </nav>
    </div>
  );
};

export default Navbar;
