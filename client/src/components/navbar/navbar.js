import React, { Component } from 'react'
import { BrowserRouter,Link } from 'react-router-dom';

class navbar extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-expand-sm navbar-dark bg-dark mb-4">
        <div className="container">
        <Link className="navbar-brand" to="/">
            MovieDB
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#mobile-nav"
          >
            <span className="navbar-toggler-icon" />
          </button>

          

            <ul className="navbar-nav ml-auto ">
              <li className="nav-item">
                <Link className="nav-link "  to ='/register'>
                  Sign Up
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link"  to ='/login'>
                  Login
                </Link>
              </li>
            </ul>
          </div>
        
      </nav>
    );
  }
}

export default navbar;
