import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import "./style.css";
import { SearchIcon } from "../../assets/icons";
import axios from "axios";

const MainPage = (props) => {
  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState([]);
  const [searchTitle, setSearchTitle] = useState("");

  useEffect(
    (searchTitle) => {
      const loadPosts = async () => {
        setLoading(true);
        const response = await axios.get(`/search?q=${searchTitle}`);
        setPosts(response.data);
        //console.log("res", response);
        setLoading(false);
      };

      loadPosts();
    },
    [searchTitle]
  );
  return (
    <div className="main">
      <div className="navbar">
        <div className="navbar-logo">LOGO</div>
        <div className="navbar-search">
          <input
            type="text"
            placeholder="Search.."
            name="search"
            onChange={(e) => setSearchTitle(e.target.value)}
          />
          <button>
            <SearchIcon />
          </button>
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
