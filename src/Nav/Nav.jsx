import React, { Component } from "react";
import { Link } from "react-router-dom";
import FriendSearch from "./FriendSearch";
import FriendRequests from "./FriendRequests";
import {
  Menu,
  LogOut,
  RefreshCcw,
  MessageSquare,
  Search,
  Edit,
  ArrowLeft
} from "react-feather";
import PersonTop from "../Person/PersonTop";
const defaultProfile = "/images/logo.jpg";

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
      <nav className="navbar p-3 navbar-expand-md bg-light ">
        {userSession.isUserSignedIn() ? 
        <PersonTop username={userSession.loadUserData().username}/>
        :
        <div>
           <Link
            className="btn btn-outline-dark"
            id="signin-button"
            to="/signin"
          >
            Get Naked with Blockstack
          </Link>
        </div>
        }
        <Link to="/" className="navbar-brand d-md-none d-inline">
          <img src="/favicon.ico" />
        </Link>

        <button
          className="navbar-toggler ml-1"
          type="button"
          data-toggle="collapse"
          data-target="#collapsingNavbar2"
        >
          <Menu color="#252631" />
        </button>

        <div
          className="navbar-collapse collapse 
           w-100"
          id="collapsingNavbar2"
        >
          <ul className="nav navbar-nav col-md-5 d-flex justify-content-end align-items-center">
            <li className="nav-item my-auto">
              <Link
                className="nav-link navbar-brand mx-0 d-none d-md-inline"
                to="/"
              >
                Nuddle
              </Link>
            </li>
          </ul>
          {userSession.isUserSignedIn() && <ul className="nav navbar-nav col-md-7  flex-nowrap">
            <div className="d-flex col justify-content-end">
            <li>
                  {this.state.searchOpened ? (
                    <FriendSearch closeSearch={this.closeSearch.bind(this)} />
                  ) : (
                    <div
                      className="nav-link"
                      onMouseEnter={this.openSearch.bind(this)}
                    >
                      <Search />
                    </div>
                  )}
                </li>
                <li
                  className="nav-item"
                  data-toggle="tooltip"
                  title="Friend Requests"
                >
                  <FriendRequests/>
                </li>
              
              </div>

            <div className="d-flex col-md-6 justify-content-between align-items-center">
              <div className="d-flex">
              <li className="nav-item">
                <Link
                  className="nav-link"
                  to="/chat"
                  data-toggle="tooltip"
                  title="Chat"
                >
                  <MessageSquare />
                </Link>
              </li>
              <li
                className="nav-item"
                data-toggle="tooltip"
                title="Refresh feed"
              >
                <Link to="/" className="nav-link">
                  <RefreshCcw />
                </Link>
              </li>
              <li className="nav-item" data-toggle="tooltip" title="Log Out">
                <a className="nav-link" onClick={this.props.handleSignOut}>
                  <LogOut />
                </a>
              </li>
            
               </div>
            </div>
          </ul>
        }
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
