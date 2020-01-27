import React, { Component } from "react";
import ChatList from "./ChatList";
import MessageInput from "./MessageInput";
import MessageItem from "./MessageItem";
import { withRouter } from "react-router";
import Message from "../models/Message";
import ReactLoading from 'react-loading';

class ChatRoom extends Component {
  constructor(props) {
    super(props);
    this.state = {
      messageList: [],
      img: "",
      isLoading: false
    };
    const messageCallBack = message => {
      if (
        message.attrs.userGroupId === this.props.match.params.chatRoomId
      ) {
        this.fetchMessages();
      }
    };
    Message.addStreamListener(messageCallBack.bind(this));
  }
  componentDidMount() {
    if (this.props.match.params.chatRoomId) {
      this.fetchMessages();
    }
  }
  startLoading(){
    this.setState({
      isLoading: true
    })
  }
  endLoading(){
    this.setState({
      isLoading: false
    })
  }
  componentDidUpdate(prevProps) {
    if (
      prevProps.match.params.chatRoomId !==
        this.props.match.params.chatRoomId &&
      this.props.match.params.chatRoomId
    ) {
      this.startLoading()
      this.fetchMessages().finally(()=>this.endLoading());
    }
  }
  async fetchMessages() {
    const messages = await Message.fetchList({
      userGroupId: this.props.match.params.chatRoomId
    });
    // for(let msg of messages) {
    //   await msg.destroy()
    // }
    this.setState({
      messageList: messages
    });
  }

  sendMessage(newMessage) {
    let _messages = this.state.messageList;
    _messages.push(newMessage);
    this.setState({
      messageList: _messages
    });
  }
 
  render() {
    return (
      <div className="chat-room-wrapper">
        <div className="chat-room">
          {!this.props.match.params.chatRoomId ? (
            <div>Select a friend to nuddle</div>
          ) : this.state.isLoading ? (
            <ReactLoading
              type={"cylon"}
              color={"grey"}
              height={100}
              width={100}
            />
          ) : this.state.messageList.length === 0 ? (
            <i>
              You don't have any message with this nudist. Spice it up now ;)
            </i>
          ) : (
            this.state.messageList.map(msg => {
              return <MessageItem msg={msg} 
              userSession = {this.props.userSession}/>;
            })
          )
          }
        </div>

        <MessageInput
          userSession={this.props.userSession}
          sendMessage={this.sendMessage.bind(this)}
          // postPhoto={this.postPhoto.bind(this)}
          chatRoomId={this.props.match.params.chatRoomId}
        />
      </div>
    );
  }
}

export default withRouter(ChatRoom);
