import React, { Component } from 'react';

export default class Signin extends Component {

  render() {
    const { handleSignIn } = this.props;

    return (
      <div className="panel-landing" >
        <div className="panel-head">

        <h1 className="landing-heading">Welcome to Nuddle</h1>
        <i>Nuddle is a secure space where you can share your saucy photos with your mates. 
          {/* All your private photos are encrypted and only have access by you and the people who you want to share with. */}
          </i>
        </div>
        <div>

        <img src="/images/demo.gif" width="700px"/>
        </div>
        <div style={{display:"flex", flexDirection : "column"}}>
<div>
          <button
            className="btn btn-outline-dark btn-lg"
            id="signin-button"
            onClick={ handleSignIn.bind(this) }
          >
            Get Naked with Blockstack*
          </button>
          </div>
          <div>
          <small>
            *By signing up, you confirm you are <b>18 years old</b> and above
          </small>
          </div>
          </div>
      </div>
    );
  }
}
