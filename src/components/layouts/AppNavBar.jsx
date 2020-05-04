import { connect} from 'react-redux';
import { Link } from 'react-router-dom';
import React from 'react';

const AppNavBar = () => (
  <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
    <Link className="navbar-brand" to="/">Home</Link>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>

    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mr-auto">
        <li className="nav-item active">
          <Link className="nav-link" to="/dashboard">Dashboard</Link>
        </li>
      </ul>
      <Link className="btn btn-danger">Logout</Link>
    </div>
  </nav>
);

export const ConnectedNavigation = connect(state => state)(AppNavBar);