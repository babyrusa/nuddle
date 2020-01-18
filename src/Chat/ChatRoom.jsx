import React, { Component } from "react";
import ChatList from "./ChatList";
import MessageInput from "./MessageInput";

export default class ChatRoom extends Component {
  constructor(props) {
    super(props);
    this.state = {
      messageList : ['hey','feeling little naughty?','send noods']
    };
  }
  render(){
    return(
      <div className="chat-room">
        {this.state.messageList.map(msg => {
          return <div className="msg-item">
            {msg}
            </div>
        })}   
        <MessageInput/>     
      </div>
    )
  }
}