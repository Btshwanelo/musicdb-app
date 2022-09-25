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
            <SearchIcon />
          </button>
          <input type="text" placeholder="Search.." name="search" />
        </div>
      </div>
      <div className="cards">
        <div className="cards-card">
          <img src="https://via.placeholder.com/150" alt="Avatar" />
          <div className="cards-container">
            <h4>
              <b>John Doe</b>
            </h4>
            <p>Architect & Engineer</p>
          </div>
        </div>
        <div className="cards-card">
          <img src="https://via.placeholder.com/150" alt="Avatar" />
          <div className="cards-container">
            <h4>
              <b>John Doe</b>
            </h4>
            <p>Architect & Engineer</p>
          </div>
        </div>
        <div className="cards-card">
          <img src="https://via.placeholder.com/150" alt="Avatar" />
          <div className="cards-container">
            <h4>
              <b>John Doe</b>
            </h4>
            <p>Architect & Engineer</p>
          </div>
        </div>
        <div className="cards-card">
          <img src="https://via.placeholder.com/150" alt="Avatar" />
          <div className="cards-container">
            <h4>
              <b>John Doe</b>
            </h4>
            <p>Architect & Engineer</p>
          </div>
        </div>
        <div className="cards-card">
          <img src="https://via.placeholder.com/150" alt="Avatar" />
          <div className="cards-container">
            <h4>
              <b>John Doe</b>
            </h4>
            <p>Architect & Engineer</p>
          </div>
        </div>
        <div className="cards-card">
          <img src="https://via.placeholder.com/150" alt="Avatar" />
          <div className="cards-container">
            <h4>
              <b>John Doe</b>
            </h4>
            <p>Architect & Engineer</p>
          </div>
        </div>
        <div className="cards-card">
          <img src="https://via.placeholder.com/150" alt="Avatar" />
          <div className="cards-container">
            <h4>
              <b>John Doe</b>
            </h4>
            <p>Architect & Engineer</p>
          </div>
        </div>
      </div>
    </div>
  );
};

MainPage.propTypes = {};

export default MainPage;
