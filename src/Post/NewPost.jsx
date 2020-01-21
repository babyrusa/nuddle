import React, { Component } from 'react';
import {
  Person,
} from 'blockstack';
import FriendList from '../Chat/FriendList';
import { Send } from 'react-feather';
import Post from '../models/Post';
import { withRouter } from 'react-router-dom';
import Photo from '../Shared/photo';

const avatarFallbackImage = 'https://s3.amazonaws.com/onename/avatar-placeholder.png';

class NewPost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      caption : '',
    }
  }
 
  post(){
    const {img} = this.props;
    const byteData = Photo.b64tobinary(img)
    
    Post.createPost(this.state.caption, byteData).finally(()=> {
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
        <div>
          <input className="form-control" placeholder="Send as post or Slice thru DM"/>
          <button className="btn btn-light bg-salmon" onClick={this.post.bind(this)} data-toggle="tooltip" title="Send as post">
            <Send color={'white'}/></button>
        </div>
        <FriendList selectFriend={this.props.sendPicture}/>
      </div>
    )
  }
}
export default withRouter(NewPost)