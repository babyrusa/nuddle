import React, { Component } from "react";
import { User } from "radiks";
import { Person, lookupProfile } from "blockstack";
import BlockstackUser from "../models/BlockstackUser";
const defaultProfile = "/images/butt-profile.jpeg";

export default class PersonTop extends Component {
  constructor(props) {
    super(props);
    this.state = {
      person: {
        name() {
          return "Anonymous";
        },
        avatarUrl() {
          return defaultProfile;
        }
      }
    };
  }
  componentDidMount() {
    this.getProfile();
  }
  getProfile() {
    const { username } = this.props;

    lookupProfile(username)
      .then(profile => {
        this.setState({
          person: new Person(profile)
        });
      })
      .catch(error => {});
  }
  render() {
    const { person } = this.state;
    const { username } = this.props;

    return (
        <div className="person-top">
          <div
            className="photos"
            style={{
              backgroundImage: `url(${person.avatarUrl()})`,
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat"
            }}
          />
          <div>
            <div className="person-top-name">{person.name()}</div>
            <div className="person-top-username">{username}</div>
          </div>
        </div>
    );
  }
}
