import React, { Component } from "react";
import { User, UserGroup, GroupMembership } from "radiks";
import FriendRequest from "../models/FriendRequest";
import userGroup from "radiks/lib/models/user-group";
import PersonTop from "../Person/PersonTop";
import BlockstackUser from "../models/BlockstackUser";

export default class FriendSearch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: "",
      searchedUsers: [],
      friends: []
    };
  }
  componentDidMount() {
    this.getMyFriends();
  }
  async onChangeHandler(e) {
    this.setState({
      input: e.target.value
    });
    if (e.target.value.trim() !== "") {
      const _searchedUsers = await User.fetchList({
        username: { $regex: e.target.value }
      });
      await this.setState({
        searchedUsers: _searchedUsers
      });
    }
  }
  async addFriend(recipient) {
    const fr = new UserGroup({
      name: "FriendRequest"
    });
    await fr.create();
    const groupMembership = new GroupMembership({
      userGroupId: fr._id,
      username: User.currentUser()._id,
      signingKeyPrivateKey: fr.privateKey,
      signingKeyId: fr.attrs.signingKeyId
    });

    await groupMembership.save();
    const memberShip = await fr.makeGroupMembership(recipient);
    const request = new FriendRequest({
      sender: User.currentUser()._id,
      recipient: recipient,
      userGroupId: fr._id,
      invitationId: memberShip._id
    });
    await request.save();

    const _friends = this.state.friends;
    _friends.push(recipient);
    this.setState({
      friends : _friends
    })
    const me = await BlockstackUser.findOne({
      username: User.currentUser()._id
    });
    me.update({
      friends: _friends
    });
    await me.save();
  }
  async getMyFriends() {
    const me = await BlockstackUser.findOne({
      username: User.currentUser()._id
    });
    if (me.attrs.friends) {
      this.setState({
        friends: me.attrs.friends
      });
    }
  }
  isFriend(username) {
    if (this.state.friends.includes(username)) {
      return true;
    }
    return false;
  }
  isMe(username) {
    if (username === User.currentUser()._id) {
      return true;
    }
    return false;
  }
  render() {
    return (
      <div className="nav-link">
        <input
          id="search-input"
          type="text"
          className="form-control friend-search"
          // style={{ fontFamily: 'Arial, FontAwesome' }}
          placeholder="Search for Nudist"
          value={this.state.input}
          onChange={this.onChangeHandler.bind(this)}
          // onBlur={this.props.closeSearch}
          // onMouseLeave={this.props.closeSearch}
        />
        {this.state.input !== "" && (
          <ul className="list-group m-0 p-0" id="searchedUsers">
            {this.state.searchedUsers.map(user => {
              return (
                <li className="list-group-item m-0 p-0 seached-user-li">
                  <PersonTop username={user.attrs.username} />
                  {this.isFriend(user.attrs.username) ||
                  this.isMe(user.attrs.username) ? (
                    <div></div>
                  ) : (
                    <div>
                      <button
                        className="btn btn-light add-friend-butt"
                        onClick={this.addFriend.bind(this, user.attrs.username)}
                      >
                        Add friend <i class="fas fa-plus"></i>
                      </button>
                    </div>
                  )}
                </li>
              );
            })}
          </ul>
        )}
      </div>
    );
  }
}
