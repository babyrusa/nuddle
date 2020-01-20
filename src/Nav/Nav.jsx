import React, { Component } from "react";
import { Link } from "react-router-dom";
import FriendSearch from "./FriendSearch";
import FriendRequests from "./FriendRequests";
const defaultProfile = "/images/butt-profile.jpeg";

export default class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchOpened: false
    };
  }
  openSearch() {
    this.setState({
      searchOpened: true
    });
  }
  closeSearch() {
    this.setState({
      searchOpened: false
    });
  }
  render() {
    const { handleSignOut, userSession } = this.props;
    const { person } = this.state;
    return (
      <nav className="navbar navbar-expand-md bg-light justify-content-md-center justify-content-start">
        <a className="navbar-brand d-md-none d-inline" href="">
          Brand
        </a>
        <button
          className="navbar-toggler ml-1"
          type="button"
          data-toggle="collapse"
          data-target="#collapsingNavbar2"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        {this.state.searchOpened ? (
          <FriendSearch closeSearch={this.closeSearch.bind(this)} />
        ) : (
          <a className="nav-link" onMouseEnter={this.openSearch.bind(this)}>
            <i className="fa fa-search mr-1"></i>
          </a>
        )}
        <div
          className="navbar-collapse collapse justify-content-between align-items-center w-100"
          id="collapsingNavbar2"
        >
          <ul className="navbar-nav mx-auto text-md-center text-left">
            {/* <li class="nav-item">
                <a class="nav-link" href="#">Link</a> 
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#">Link</a>
            </li> */}
            <li className="nav-item my-auto">
              <Link
                className="nav-link navbar-brand mx-0 d-none d-md-inline"
                to="/"
              >
                Nuddle
              </Link>
            </li>
            {/* <li class="nav-item">
                <a class="nav-link" href="#">Link</a> 
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#">Link</a> 
            </li> */}
          </ul>
          <ul className="nav navbar-nav flex-row justify-content-md-center justify-content-start flex-nowrap">
            <li className="nav-item">
              <FriendRequests />
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/chat" data-toggle="tooltip" title="Chat">
                <i className="far fa-comment-alt"></i>
              </Link>
            </li>
            <li className="nav-item" data-toggle="tooltip" title="Refresh feed">
              <a className="nav-link" href="">
              <i className="fas fa-sync-alt"></i>
              </a>
            </li>
          </ul>
        </div>
      </nav>

      //   <nav className="navbar navbar-dark navbar-static-top">
      //   <a className="navbar-brand" href="https://nuddle.me">
      //     <img src={defaultProfile} alt="nuddle logo" width="100px"/>
      //   </a>
      //   <button
      //       className="navbar-toggler"
      //       type="button"
      //       data-toggle="collapse"
      //       data-target="#navbarNavAltMarkup"
      //       aria-controls="navbarNavAltMarkup"
      //       aria-expanded="false"
      //       aria-label="Toggle navigation"
      //     >
      //       <span className="navbar-toggler-icon"></span>
      //     </button>
      //   <FriendSearch/>
      //   <FriendRequests/>
      //   <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      //     <div className="navbar-nav ml-auto">
      //     {/* {userSession.isUserSignedIn() && ( */}
      //           <Link
      //             to={"/profile"}
      //             className="nav-item"
      //           >
      //             Profile
      //           </Link>
      //         {/* )} */}
      //     </div>
      //   </div>
      // </nav>
    );
  }
}
