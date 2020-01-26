import React, { Component } from "react";
import { User } from "radiks";
import { Person, lookupProfile } from "blockstack";
import groupInvitation from "radiks/lib/models/group-invitation";
import PersonTop from "../Person/PersonTop";
import BlockstackUser from "../models/BlockstackUser";
import { CheckCircle } from "react-feather";
const defaultProfile = "/images/logo.jpg";

export default class FriendRequestItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      person : {
        name() {
          return "Anonymous";
        },
        avatarUrl() {
          return defaultProfile;
        },
        description() {
          return "No bio";
        }
      },
      friends : []
    };
  }

  async componentDidMount(){
    const me = await BlockstackUser.findOne({ username: User.currentUser()._id });
    if (me.attrs.friends) {
      this.setState({
        friends : me.attrs.friends
      })
    }
  }
  getProfile() {
    const {fr} = this.props;

    lookupProfile(fr.attrs.sender)
      .then(profile => {
        this.setState({
          person: new Person(profile)
        });
      })
      .catch(error => {
      });
  }
  async acceptFR(){
    const {fr} = this.props;
    const invitation = await groupInvitation.findById(fr.attrs.invitationId);
    await invitation.activate();
    const _friends = this.state.friends;
    _friends.push(fr.attrs.sender);

    const me = await BlockstackUser.findOne({ username: User.currentUser()._id });
    me.update({
      friends  : _friends
    })
    await me.save()
  }
  isFriend(username){
    if (this.state.friends.includes(username)){
      return true;
    }
    return false;
  }
 
  render(){
    const {fr} = this.props;

    return(
        <li className="list-group-item seached-user-li">
            
            <PersonTop username={fr.attrs.sender}/>
            {this.isFriend(fr.attrs.sender) ? 
            <div>
              <button className="btn btn-light add-friend-butt disabled">
                <CheckCircle color="salmon"/>
               </button>
            </div>
            :
             <div>
               <button className="btn btn-light add-friend-butt" onClick={this.acceptFR.bind(this)}>
                 Accept 
               </button>
               <button className="btn btn-light add-friend-butt">
                 Deny 
               </button>
             </div>
            }
           </li>
    )
  }
}