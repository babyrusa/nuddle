import React, { Component } from "react";
import ChatList from "./ChatList";
import ChatRoom from "./ChatRoom";

export default class Chat extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedFriend: null
    };
  }
  selectChat(selectedFriend){
    this.setState({
      selectedFriend : selectedFriend
    })
  }
  componentDidMount(){
  }
  render(){
    return(
      <div className="chat-wrapper">
        <ChatList selectChat={this.selectChat.bind(this)}/>
        <ChatRoom 
        userSession={this.props.userSession}
        selectedFriend={this.state.selectedFriend} />
      </div>
    )
  }
}