import React, { Component } from 'react';
import { UserGroup } from 'radiks/lib';
import FriendRequest from '../models/FriendRequest';

export default class Home extends Component {
  async deleteUG(){
    const groups = await FriendRequest.fetchOwnList();
    console.log(groups)
    for(let group of groups){
      console.log(group)
      await group.destroy()
    }
  }
  render() {
    return(
      <button onClick={this.deleteUG.bind(this)}>delete</button>
    )
    
  }
}