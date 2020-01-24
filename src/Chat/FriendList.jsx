import React, { Component } from "react";
import { User } from "radiks";
import { Person, lookupProfile } from "blockstack";
import BlockstackUser from "../models/BlockstackUser";
import PersonTop from "../Person/PersonTop";
import ChatListItem from "./ChatListItem";
import userGroup from "radiks/lib/models/user-group";
const defaultProfile = "/images/logo.jpg";

export default class FriendList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      groups: []
    };
  }
  componentDidMount() {
    this.getMyChats();
  }
  async getMyChats() {
    const groups = await userGroup.myGroups();
    let finalGroups = [];
    for (let group of groups) {
      if (group.attrs.members.length === 2) {
        finalGroups.push(group);
      }
    }
    this.setState({
      groups: finalGroups
    });
  }
  getFriends() {
    const me = BlockstackUser.findOne({ username: User.currentUser()._id });
  }

  sendPhoto(group){
    console.log(group)
    this.props.sendPhoto(group.attrs._id)
  }
  render() {
    return (
      <React.Fragment>
        <h1>Friend List</h1>
        <div>
          <ul className="list-group">
            {this.state.groups.map(group => {
              return (
                <li className="list-group-item friend-list">
                  {/* <PersonTop username="tateyeetman.id.blockstack"/>
                  <div>
                    <button
                      className="btn btn-light add-friend-butt"
                      onClick={this.props.selectFriend}
                    >
                      Send
                    </button>
                  </div> */}
                  <ChatListItem
                    group={group}
                    selectChat={this.props.selectChat}
                  />
                  <button
                    className="btn btn-light add-friend-butt"
                    onClick={this.sendPhoto.bind(this, group)}
                  >
                    Send
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      </React.Fragment>
    );
  }
}
