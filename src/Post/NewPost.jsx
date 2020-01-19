import React, { Component } from 'react';
import {
  Person,
} from 'blockstack';
import FriendList from '../Chat/FriendList';
import { Send } from 'react-feather';

const avatarFallbackImage = 'https://s3.amazonaws.com/onename/avatar-placeholder.png';

export default class NewPost extends Component {
  constructor(props) {
  	super(props);
  }
  render(){
    return(
      <div className="new-post">
        <div>
        <textarea placeholder="write something juicy"></textarea>
        </div>
        <div>
          <input className="form-control" placeholder="Send as post or Slice thru DM"/>
          <button className="btn btn-light bg-salmon"><Send color={'white'}/></button>
        </div>
        <FriendList/>
      </div>
    )
  }
}