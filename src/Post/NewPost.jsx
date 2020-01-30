import React, { Component } from 'react';
import {
  Person,
} from 'blockstack';
import FriendList from '../Chat/FriendList';
import { Send } from 'react-feather';
import Post from '../models/Post';
import { withRouter } from 'react-router-dom';
import Photo from '../Shared/photo';
const uuidv4 = require('uuid/v4');


class NewPost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      caption : '',
    }
  }
 
  async post(){
    const {img, userSession} = this.props;
    // const blobId = uuidv4()

    // await userSession.putFile(`${blobId}.json`, JSON.stringify(img),{ encrypt: false })

    Post.createPost(this.state.caption, img).finally(()=> {
      this.props.closeModal()
      this.props.history.push(`/`)
    });

  }
  handleChange(event) {
    this.setState({
      caption: event.target.value,
    });
  }
  
 
  render(){
    return(
      <div className="new-post">
        <div>
        <textarea placeholder="write something juicy" 
         value={this.state.caption}
         onChange={this.handleChange.bind(this)}></textarea>
        </div>
        <div className="new-post-send-list">
          <input className="form-control" placeholder="Send as post or Slice thru DM"/>
          <button className="btn btn-light bg-salmon" onClick={this.post.bind(this)} data-toggle="tooltip" title="Send as post">
            <Send color={'white'}/></button>
        </div>
        <FriendList sendPhoto={this.props.sendPhoto}/>
      </div>
    )
  }
}
export default withRouter(NewPost)