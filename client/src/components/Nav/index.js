import React from 'react';
import {Link} from 'react-router-dom';


function Index() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <Link className="header" to="/">
          <h1>IGOR'S BOOKS</h1>
        </Link>
      <div className="container">
        
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link to="/"
                    className={window.location.pathname === "/" || window.location.pathname === "/search"
                      ? "nav-link active"
                      : "nav-link"}>Search</Link>
            </li>
            <li className="nav-item">
              <Link to="/bookshelf"
                    className={window.location.pathname === "/bookshelf"
                      ? "nav-link active"
                      : "nav-link"}>BOOK COLLECTION</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Index;