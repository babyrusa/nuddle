import React, { Component } from "react";
import { User } from "radiks";
import { Person, lookupProfile } from "blockstack";
import BlockstackUser from "../models/BlockstackUser";
import PersonTop from "../Person/PersonTop";
const defaultProfile = "/images/butt-profile.jpeg";

export default class FriendList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      friendList: ["bobby", "booloo", "beanbobo"]
    };
  }
  componentDidMount() {
    this.getFriends();
  }
  getFriends() {
    const me = BlockstackUser.findOne({ username: User.currentUser()._id });
  }

  render() {
    return (
      <React.Fragment>
        <h1>Friend List</h1>
        <div>
          <ul className="list-group">
            {this.state.friendList.map(friend => {
              return (
                <li className="list-group-item friend-list">
                  <PersonTop username="tateyeetman.id.blockstack"/>
                  <div>
                    <button
                      className="btn btn-light add-friend-butt"
                      onClick={this.props.selectFriend}
                    >
                      Send
                    </button>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </React.Fragment>
    );
  }
}
