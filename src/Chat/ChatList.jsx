import React, { Component } from "react";
import { User } from "radiks";
const defaultProfile = '/images/butt-profile.jpeg'
export default class ChatList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      friends : ['Bobby', 'Banana', 'Boolooloo']
    };
  }
  render(){
    return(
      <div className="chat-list">
        <div>
          <h1>Chats</h1>
        </div>
        <div className="friend-list">
        {this.state.friends.map(friend => {
          return <div className="friend-item">
            <div style={{ padding: "0px 10px" }}>
          <div
            className="photos"
            style={{
              backgroundImage: `url(${
                defaultProfile
              })`,
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat"
            }}
          />
        </div>
        <div>
            {friend}
            </div>
          </div>
        })}
        </div>
      </div>
    )
  }
}