import React, { Component } from "react";
import { User, UserGroup } from "radiks";
import FriendRequest from "../models/FriendRequest";
import userGroup from "radiks/lib/models/user-group";

export default class FriendSearch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: "",
      searchedUsers: []
    };
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
  async addFriend(recipient){
    console.log(recipient)
    const fr = new UserGroup({
      name : 'FriendRequest', 
      // sender : User.currentUser()._id,
      // recipient : recipient
    });
    await fr.create().then(async (fr) => {
      
    });
    const memberShip = await fr.makeGroupMembership(recipient);
    console.log(memberShip)
    console.log(fr)
    const request = new FriendRequest({
      sender : User.currentUser()._id,
      recipient : recipient,
      userGroupId : fr._id,
      invitationId : memberShip._id
    })
    await request.save()
  }
  render() {
    return (
      <div className="nav-link">
        <input
          id="search-input"
          type="text"
          className="form-control friend-search"
          style={{ fontFamily: "Arial, FontAwesome" }}
          placeholder="&#xF002; Search for Nudist"
          value={this.state.input}
          onChange={this.onChangeHandler.bind(this)}
          onBlur={this.props.closeSearch}
          // onMouseLeave={this.props.closeSearch}
        />
        {this.state.input !== "" && (
          <ul className="list-group" id="filterHashtag">
            {this.state.searchedUsers.map(user => {
              return (
                <li className="list-group-item seached-user-li">
                  <div>{user.attrs.username} </div>
                  <div>
                    <button className="btn btn-light add-friend-butt" onClick={this.addFriend.bind(this, user.attrs.username)}>
                      Add friend <i class="fas fa-plus"></i>
                    </button>
                  </div>
                </li>
              );
            })}
          </ul>
        )}
      </div>
    );
  }
}
