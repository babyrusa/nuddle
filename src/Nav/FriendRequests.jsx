
import React, { Component } from "react";
import BlockstackUser from "../models/BlockstackUser";
import { User, UserGroup, GroupInvitation } from "radiks";
import FriendRequest from "../models/FriendRequest";
import userGroup from "radiks/lib/models/user-group";
import ReactLoading from 'react-loading';
import FriendRequestItem from "./FriendRequestItem";
import { UserPlus } from "react-feather";

export default class FriendRequests extends Component {
  constructor(props) {
    super(props);
    this.state = {
      frButtonClicked : false,
      friendRequests : [],
      isLoading : false
    };
  }
  async getFriendRequests(){
    this.setState({
      frButtonClicked : !this.state.frButtonClicked
    }, async ()=>{
      if (this.state.frButtonClicked) {
        this.setState({
          isloading : true
        })
        const _requests = await FriendRequest.fetchList({recipient : User.currentUser()._id}, {decrypt : true});     
        this.setState({
          isloading : false
        })
        // const invitation = await GroupInvitation.findById(requests[requests.length-1].attrs.invitationId);
        // await invitation.activate();
        // const group = await UserGroup.find(requests[requests.length-1].attrs.userGroupId);
        // console.log(group)
        this.setState({
          friendRequests : _requests          
        })
         
      }
    })
   

  }
  render() {
    return (
      <React.Fragment>
      <button className="nav-link btn" onClick={this.getFriendRequests.bind(this)} data-toggle="tooltip" title="Check friend requests">
        <UserPlus/>
      </button>
      {this.state.frButtonClicked && (
      <div className="fr-dropdown">  
        {this.state.isloading ? 
        <ReactLoading type={'spinningBubbles'} color={'salmon'} height={100} width={100} />
        :
        (this.state.friendRequests.length === 0 ?
      <div>Aw it's okay little boo if noone wanna see your nud</div>
       :
       <ul className="list-group friend-request-list">
       {this.state.friendRequests.map(fr => {
         return (
           <FriendRequestItem fr = {fr}/>
         );
       })}
      </ul>)}</div>)
      }
     </React.Fragment>
    )
  }
}