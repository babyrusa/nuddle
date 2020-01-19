import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import FriendSearch from './FriendSearch';
import FriendRequests from './FriendRequests';
const defaultProfile = "/images/butt-profile.jpeg";

export default class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    const { handleSignOut, userSession } = this.props;
    const { person } = this.state;
    return (
      <nav className="navbar navbar-dark navbar-static-top">
      <a className="navbar-brand" href="https://nuddle.me">
        <img src={defaultProfile} alt="nuddle logo" width="100px"/>
      </a>
      <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
      <FriendSearch/>
      <FriendRequests/>
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav ml-auto">
        {/* {userSession.isUserSignedIn() && ( */}
              <Link
                to={"/profile"}
                className="nav-item"
              >
                Profile
              </Link>
            {/* )} */}
        </div>
      </div>
    </nav>
    )
  }
}