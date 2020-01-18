import React, { Component } from "react";
const defaultProfile = "/images/butt-profile.jpeg";

export default class MessageItem extends Component {
  render() {
    const {msg} = this.props;
    return (
      <div className="msg-item">
        <div style={{ padding: "0px 10px" }}>
          <div
            className="photos"
            style={{
              backgroundImage: `url(${defaultProfile})`,
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat"
            }}
          />
        </div>
        <div>
          <i>Nudist</i>
          <div className="msg-body">
          {msg}

          </div>
        </div>
      </div>
    );
  }
}
