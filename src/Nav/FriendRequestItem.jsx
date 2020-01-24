import React, { Component } from "react";
import { User } from "radiks";
import { Person, lookupProfile } from "blockstack";
import groupInvitation from "radiks/lib/models/group-invitation";
import PersonTop from "../Person/PersonTop";
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
      }
    };
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
  }
  render(){
    const {fr} = this.props;

    return(
        <li className="list-group-item seached-user-li">
            
            <PersonTop username={fr.attrs.sender}/>
             <div>
               <button className="btn btn-light add-friend-butt" onClick={this.acceptFR.bind(this)}>
                 Accept 
               </button>
               <button className="btn btn-light add-friend-butt">
                 Deny 
               </button>
             </div>
           
           </li>
    )
  }
}