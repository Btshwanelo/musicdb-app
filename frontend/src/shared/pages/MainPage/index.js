import React from "react";
import PropTypes from "prop-types";
import "./style.css";
import { SearchIcon } from "../../assets/icons";

const MainPage = (props) => {
  return (
    <div className="main">
      <div className="navbar">
        <div className="navbar-logo">Logo</div>
        <div className="navbar-search">
          <button>
            <SearchIcon  />
          </button>
          <input type="text" placeholder="Search.." name="search" />
        </div>
      </div>
      <div className="cards">Cards</div>
    </div>
  );
};

MainPage.propTypes = {};

export default MainPage;
