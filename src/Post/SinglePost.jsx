import React, { Component } from 'react';
import Post from '../models/Post';
import PersonTop from '../Person/PersonTop';

export default class SinglePost extends Component {
  constructor(props) {
  	super(props);

  	this.state = {
      post : {
        attrs : {
          username : 'Nudist',
          base64 : ''
        }
      }
  	};
  }
  componentDidMount(){
    const id = this.props.match.params.postId;
    if (id) {
      this.getPost();
    } else {
      this.props.history.push('/');
    }
  }
  async getPost(){
    const id = this.props.match.params.postId;
    const post = await Post.findOne({_id : id});
    if(post) {
      this.setState({
        post : post
      })
    } else {
      this.props.history.push('/');
    }
  }
  render() {
    const {post} = this.state;
    return (
      <div className="single-post-wrapper">
        <div>
        <img src={post.attrs.base64}/>
        <p>{post.attrs.caption}</p>
        </div>
      </div>
    )
  }
}