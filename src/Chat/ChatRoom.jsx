import React, { Component } from "react";
import ChatList from "./ChatList";
import MessageInput from "./MessageInput";
import MessageItem from "./MessageItem";

export default class ChatRoom extends Component {
  constructor(props) {
    super(props);
    this.state = {
      messageList: ["hey", "feeling little naughty?", "send noods"],
      img : ''
    };
  }
  postMessage(newMessage) {
    this.setState({
      messageList: this.messageList.push(newMessage)
    });
  }
  postPhoto(img) {
    this.setState({
      img: img
    });
  }
  render() {
    return (
      <div className="chat-room">
        {this.state.messageList.map(msg => {
          return <MessageItem msg={msg}/>
        })}
        <img src={this.state.img}/>
        <MessageInput
          postMessage={this.postMessage.bind(this)}
          postPhoto={this.postPhoto.bind(this)}
        />
      </div>
    );
  }
}
