import React, { Component } from "react";
import { User } from "radiks";
import { Person, lookupProfile } from "blockstack";
const defaultProfile = "/images/butt-profile.jpeg";

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
  acceptFR(){
    const {fr} = this.props;

  }
  render(){
    const {fr} = this.props;

    return(
        <li className="list-group-item seached-user-li">
          {/* <div> */}
            <div>
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
            <div>
            <div>{fr.attrs.sender} </div>
             <div>
               <button className="btn btn-light add-friend-butt">
                 Accept 
               </button>
               <button className="btn btn-light add-friend-butt">
                 Deny 
               </button>
             </div>
            </div>
          {/* </div> */}
           
           </li>
    )
  }
}