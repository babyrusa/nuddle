import React, { Component } from 'react';
import { User } from 'radiks';
import { Person, lookupProfile, UserSession, getFile } from 'blockstack';
import BlockstackUser from '../models/BlockstackUser';
import Photo from '../Shared/photo';
const defaultProfile = '/images/logo.jpg';

export default class PersonTop extends Component {
  constructor(props) {
    super(props);
    this.state = {
      person: {
        name() {
          return 'Nudist';
        },
        avatarUrl() {
          return defaultProfile;
        }
      },
      profilelUrl: ''
    };
  }
  componentDidMount() {
    this.getProfile();
  }
  componentDidUpdate(prevProps) {
    if (prevProps.username !== this.props.username) {
      this.getProfile();
    }
  }
  getProfile() {
    const { username } = this.props;
    lookupProfile(username)
      .then(profile => {
        this.setState({
          person: new Person(profile)
        }, () => this.getProfilePic());
      })
      .catch(error => {});
  }
  async getProfilePic(){
    const {person} = this.state;
    const {userSession} = this.props;
    // const profileUrl =await getFile('1PcWxogPMAg99ay4iuKE4aDdhpKwfXTvJs//avatar-0')
    // const url = Photo.toBlob(profileUrl);
    // this.setState({
    //   profileUrl : url
    // })
    fetch(person.avatarUrl(),  {method: "GET", mode: 'cors'})
    .then((response) => {
      response.blob()
      .then((blob) => URL.createObjectURL(blob))
      .then((url) => {
        this.setState({
          profilelUrl : url
        })
      })
    })
  }
  render() {
    const { person } = this.state;
    const { username } = this.props;

    return (
      <div className='person-top'>
        <div
          className='photos'
          style={{
            backgroundImage: `url(${
              this.state.profilelUrl ? this.state.profilelUrl : defaultProfile
            })`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat'
          }}
        />
        {/* <img src={this.state.profilelUrl}/> */}
        <div>
          <div className='person-top-name text-truncate'>{person.name()}</div>
          <div className='person-top-username'>{username}</div>
        </div>
      </div>
    );
  }
}
