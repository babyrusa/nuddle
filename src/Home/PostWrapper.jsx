import React, { Component } from 'react';
import PostCard from "./PostCard";

export default class Feed extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      isLoading: false,
      feed : 'public'
    };
  }

  render(){
    const {posts} = this.props;
    return(
      posts.length === 0 ? (
        <i style={{ paddingTop: "10px" }}>No nudes posted</i>
      ) : (
        posts.map(post => {
          return <PostCard 
          post={post} />;
        })
      )
    )
  }
}