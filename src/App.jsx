import React, { Component } from "react";
import { UserSession, AppConfig, config } from "blockstack";
import { Route, Switch, Redirect } from "react-router-dom";
import { User, configure, getConfig } from 'radiks';

import Home from "./Home/Home.jsx";
import Profile from "./Profile/Profile.jsx";
import Signin from "./Nav/Signin.jsx";
import Nav from "./Nav/Nav.jsx";
import Chat from "./Chat/Chat.jsx";
import CameraModal from "./Camera/CameraModal.jsx";


const appConfig = new AppConfig(['store_write', 'publish_data']);
const userSession = new UserSession({ appConfig: appConfig });
const apiServer = process.env.NODE_ENV === 'development' ? 'http://localhost:5000' : 'https://nuddle-server.herokuapp.com';
configure({
  apiServer: apiServer,
  userSession
});
config.logLevel = 'none'

export default class App extends Component {
  
  constructor(props) {
    super(props);

    this.state = {
      userSession
    }
  }

  handleSignIn(e) {
    e.preventDefault();
    userSession.redirectToSignIn();
  }

  handleSignOut(e) {
    e.preventDefault();
    userSession.signUserOut(window.location.origin);
  }

  render() {
    return (
      <div className="site-wrapper">
        <div className="site-wrapper-inner">
          {!userSession.isUserSignedIn() ? (
            <Signin
              userSession={userSession}
              handleSignIn={this.handleSignIn}
            />
          ) : (
            <React.Fragment>
              <Nav userSession={userSession} />
              <Switch>
                <Route
                  exact
                  path="/"
                  exact={true}
                  render={props => (
                    <Home
                      {...props}
                      userSession={userSession}
                      handleSignIn={this.handleSignIn}
                    />
                  )}
                />
                <Route
                  exact
                  path={`/profile`}
                  exact={true}
                  render={props => (
                    <Profile {...props} 
                    userSession={userSession}
                    handleSignOut={this.handleSignOut.bind(this)} />
                  )}
                />
                <Route
                  exact
                  path={`/chat`}
                  exact={true}
                  render={props => (
                    <Chat {...props} />
                  )}
                />
                <Route
                  exact
                  path={`/camera`}
                  exact={true}
                  render={props => (
                    <CameraModal {...props} />
                  )}
                />
                <Redirect to="/"/>
              </Switch>
            </React.Fragment>
          )
          // <Profile userSession={userSession} handleSignOut={ this.handleSignOut } />
          }
        </div>
      </div>
    );
  }

  componentDidMount() {
    if (userSession.isSignInPending()) {
      userSession.handlePendingSignIn().then(async userData => {
        window.history.replaceState({}, document.title, "/");
        this.setState({ userData: userData });
        await User.createWithCurrentUser()

      });
    } 
    // else if(userSession.isUserSignedIn()) {

    // }
  }
}
