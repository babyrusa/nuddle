import React, { Component } from "react";
import { User, UserGroup } from "radiks";
import { Link } from "react-router-dom";
import PersonTop from "../Person/PersonTop";
const defaultProfile = "/images/butt-profile.jpeg";
export default class ChatListItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      friendName: "Nudist",
      friendAvatar: defaultProfile
    };
  }
  componentDidMount(){
    this.getGroupHead()

  }

  componentDidUpdate(prevProps){
    if (prevProps.group !== this.props.group){
      this.getGroupHead()
    }
  }

  getGroupHead(){
    const { group } = this.props;

    if (group.attrs.members[0].username === User.currentUser()._id) {
      this.setState({
        friendName : group.attrs.members[1].username
      })
    } else {
      this.setState({
        friendName : group.attrs.members[0].username
      })
    }
  }
  render() {
    const { group } = this.props;
    return (
      <Link to={`/chat/${group.attrs._id}`}>
        <div className="friend-item">
          <PersonTop username = {this.state.friendName}/>
        </div>
      </Link>
    );
  }
}
