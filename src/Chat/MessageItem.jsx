import React, { Component } from "react";
import TimeStamp from "../Shared/timestamp";
import { UserSession } from "blockstack";
const defaultProfile = "/images/butt-profile.jpeg";

export default class MessageItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  componentDidMount(){
  }
  toBlob(){
    // if(this.props.msg.attrs.byte) {
      const blob = new Blob([this.props.msg.attrs.byte], {type: 'image/jpg'});
      return  URL.createObjectURL(blob);
    // }
    // return ''

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
          <img src={this.toBlob()} width="200px"/>}
          <small className="timestamp">{TimeStamp.convertDate(msg.attrs.createdAt)}</small>
          </div>
        </div>
      </div>
    );
  }
}
