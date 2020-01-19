import React, { Component } from "react";
import { User, UserGroup } from "radiks";
import { Link } from "react-router-dom";
const defaultProfile = "/images/butt-profile.jpeg";
export default class ChatListItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      friendName : 'Nudist',
      friendAvatar: defaultProfile
    };
  }
  selectChat(friend){
    this.props.selectChat(friend)
  }
  render(){
    const {group} = this.props
    return(
      <Link to={`/chat/${group.attrs._id}`}>

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
                <div >Boolooloo</div>
              </div>
              </Link>

    )
  }
}