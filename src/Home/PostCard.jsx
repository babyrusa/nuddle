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
        <PersonTop username={post.attrs.username}/>
        <img src={Photo.toBlob(post.attrs.byteArray)} width="500"/>
        <div>{post.attrs.caption}</div>
      </div>
    );
  }
}
