import React, { Component } from "react";
import { User } from "radiks";
import NewChat from "./NewChat"
const defaultProfile = "/images/butt-profile.jpeg";
export default class ChatList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      friends: ["Bobby", "Banana", "Boolooloo"],
      newChatModalIsOpen : false
    };
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
          <h1>Chats</h1>
          <button className="btn btn-light" data-toggle="tooltip" title="New chat"
          onClick={this.openNewChatModal.bind(this)}><i class="fas fa-feather-alt"></i></button>
          <NewChat  modalIsOpen={this.state.newChatModalIsOpen}
          closeModal={this.closeNewChatModal.bind(this)}/>
        </div>
        <div className="chat-list">
          {this.state.friends.map(friend => {
            return (
              <div className="friend-item">
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
                <div>{friend}</div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
