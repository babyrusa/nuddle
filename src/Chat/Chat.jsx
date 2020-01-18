import React, { Component } from "react";
import ChatList from "./ChatList";
import ChatRoom from "./ChatRoom";

export default class Chat extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  render(){
    return(
      <div className="chat-wrapper">
        <ChatList/>
        <ChatRoom/>
      </div>
    )
  }
}