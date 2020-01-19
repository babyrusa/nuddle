import React, { Component } from "react";
import TimeStamp from "../Shared/timestamp";
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
          <i>{msg.attrs.sender}</i>
          <div className="msg-body">
          <div>{msg.attrs.content}</div>
          <small className="timestamp">{TimeStamp.convertDate(msg.attrs.createdAt)}</small>
          </div>
        </div>
      </div>
    );
  }
}
