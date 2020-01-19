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
  selectFriend(selectedFriend){
    this.setState({
      selectedFriend : selectedFriend
    })
  }
  render(){
    return(
      <div className="chat-wrapper">
        <ChatList selectFriend={this.selectFriend.bind(this)}/>
        <ChatRoom selectedFriend={this.state.selectedFriend} />
      </div>
    )
  }
}