import React from "react";
import PropTypes from "prop-types";
import "./style.css";
import { SearchIcon } from "../../assets/icons";

const MainPage = (props) => {
  return (
    <div className="main">
      <div className="navbar">
        <div className="navbar-logo">LOGO</div>
        <div className="navbar-search">
          <button>
            <SearchIcon />
          </button>
          <input type="text" placeholder="Search.." name="search" />
        </div>
      </div>
      <div className="cards">
        <div className="cards-card">
          <img src="https://via.placeholder.com/150" alt="Avatar" />
          <div className="cards-container">
            <div>
              <h4>Miss you bad</h4>
              <p>03:00</p>
            </div>
            <p>By Burna Boy</p>
            <h4>Impact of Intrisic</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

MainPage.propTypes = {};

export default MainPage;
