import React, { Component } from "react";
import BlockstackUser from "../models/BlockstackUser";
import { User } from "radiks";

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
      await console.log(_searchedUsers);
      await this.setState({
        searchedUsers: _searchedUsers
      });
    }
  }
  addFriend(){

  }
  render() {
    return (
      <React.Fragment>
        <input
          id="search-input"
          type="text"
          className="form-control nav-filter"
          style={{ fontFamily: "Arial, FontAwesome" }}
          placeholder="&#xF002; Search for Nudist"
          value={this.state.input}
          onChange={this.onChangeHandler.bind(this)}
        />
        {this.state.input !== "" && (
          <ul className="list-group" id="filterHashtag">
            {this.state.searchedUsers.map(user => {
              return (
                <li className="list-group-item seached-user-li">
                  <div>{user.attrs.username} </div>
                  <div>
                    <button className="btn btn-light add-friend-butt" onClick={this.addFriend.bind(this)}>
                      Add friend <i class="fas fa-plus"></i>
                    </button>
                  </div>
                </li>
              );
            })}
          </ul>
        )}
      </React.Fragment>
    );
  }
}
