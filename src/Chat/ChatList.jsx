import React, { Component } from "react";
import { User, UserGroup } from "radiks";
import NewChat from "./NewChat"
import ChatListItem from "./ChatListItem"
import { Edit3 } from "react-feather";
const defaultProfile = "/images/butt-profile.jpeg";
export default class ChatList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      friends: ["Bobby", "Banana", "Boolooloo"],
      newChatModalIsOpen : false,
      groups: []
    };
  }
  componentDidMount(){
    this.getMyChats()
  }
  async getMyChats(){
    const groups = await UserGroup.myGroups();
    this.setState({
      groups : groups
    })
  }
  openNewChatModal() {
    this.setState({
      newChatModalIsOpen: true
    });
  }
  closeNewChatModal() {
    this.setState({
      newChatModalIsOpen: false
    });
  }
 
  render() {
    return (
      <div className="chat-list-wrapper">
        <div>
          <div className="chat-header">
          <p>Chats</p>
          <button className="btn btn-light" data-toggle="tooltip" title="New chat"
          onClick={this.openNewChatModal.bind(this)}><Edit3/></button>
          </div>
          <NewChat  modalIsOpen={this.state.newChatModalIsOpen}
          closeModal={this.closeNewChatModal.bind(this)}/>
        </div>
        <div className="chat-list">
          {this.state.groups.length === 0 ? 
          "You don't have any saucy convo yet. Initite some" :
          this.state.groups.map(group => {
            return (
              <ChatListItem group={group}
              selectChat = {this.props.selectChat}/>
            );
          })}
        </div>
      </div>
    );
  }
}
