import React, { Component } from "react";
import Photo from "../Shared/photo";
import PersonTop from "../Person/PersonTop";
const defaultProfile = "/images/butt-profile.jpeg";

export default class PostCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      img : ''
    };
  }
  componentDidMount() {
    // const {post} = this.props;
    // const img = Photo.toBlob(post.attrs.byteArray);
    // this.setState({
    //   img : img
    // })
  }
  
  render() {
    const {post} = this.props;
    return (
      <div className="post-card">
        <div style={{position : 'relative'}}>
        <div className="post-card-name">
        <PersonTop username={post.attrs.username}/>
        </div>
        <img src={Photo.toBlob(post.attrs.byteArray)} width="500"/>
        </div>
        <div>{post.attrs.caption}</div>
      </div>
    );
  }
}
