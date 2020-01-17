
import React, { Component } from "react";
import BlockstackUser from "../models/BlockstackUser";
import { User } from "radiks";
import FriendRequest from "../models/FriendRequest";

export default class FriendRequests extends Component {
  constructor(props) {
    super(props);
    this.state = {
      frButtonClicked : false,
      friendRequests : []
    };
  }
  async getFriendRequests(){
    this.setState({
      frButtonClicked : !this.state.frButtonClicked
    })
    if (this.state.frButtonClicked) {
      console.log(User.currentUser()._id)
      // const group = await FriendRequest.fetchList({recipient : User.currentUser()._id});      
    }

  }
  render() {
    return (
      <React.Fragment>
      <button className="btn" onClick={this.getFriendRequests.bind(this)}>
        <i class="fas fa-users"></i>
      </button>
      {this.state.frButtonClicked && (this.state.friendRequests.length === 0 ?
      <div>Aw it's okay little boo if noone wanna see your nud</div>
       :
       <ul className="list-group">
       {this.state.friendRequests.map(fr => {
         return (
           <li className="list-group-item seached-user-li">
             <div>{fr.attrs.sender} </div>
             <div>
               <button className="btn btn-light add-friend-butt">
                 Accept 
               </button>
               <button className="btn btn-light add-friend-butt">
                 Deny 
               </button>
             </div>
           </li>
         );
       })}
      </ul>)}
     </React.Fragment>
    )
  }
}