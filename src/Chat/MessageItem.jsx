import React, { Component } from "react";
import TimeStamp from "../Shared/timestamp";
import { UserSession } from "blockstack";
import Photo from "../Shared/photo";
const defaultProfile = "/images/logo.jpg";

export default class MessageItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  componentDidMount(){
  }

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
            {msg.attrs.type==='text' && 
          <div>{msg.attrs.content}</div>}
                      {msg.attrs.type==='photo' && 
          <img src={Photo.toBlob(this.props.msg.attrs.byte)} width="200px"/>}
          <small className="timestamp">{TimeStamp.convertDate(msg.attrs.createdAt)}</small>
          </div>
        </div>
      </div>
    );
  }
}
