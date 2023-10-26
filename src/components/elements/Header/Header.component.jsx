import React from 'react';
import { Link } from 'react-router-dom';
import './Header.styles.css';

const Header = () => (
  <div className="rmdb-header">
    <div className="rmdb-header-content">
      <Link to="/">
        <img className="rmdb-logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/IMDB_Logo_2016.svg/330px-IMDB_Logo_2016.svg.png" alt="rmdb-logo" />
      </Link>
      <img className="rmdb-tmdb-logo" src="https://raw.githubusercontent.com/zisiszikos/the-movie-db-example/master/tmdb.png" alt="tmdb-logo" />
    </div>
  </div>
)

export default Header;
