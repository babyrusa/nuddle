import React, { Component } from "react";
import PostCard from "./PostCard"
import Post from "../models/Post";
import ReactLoading from 'react-loading';

export default class HomeFeed extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts : [],
      isLoading : false
    };
  }
  componentDidMount() {
    this.setState({
      isLoading : true
    })
    // this.fetchPosts().finally(()=>{
    //   this.setState({
    //     isLoading : false
    //   })
    // })
  }
  
  async fetchPosts(){
    const posts = await Post.fetchList({});
    // for(let post of posts) {
    //   await post.destroy()
    // }
    this.setState({
      posts : posts
    })
  }
  render() {
    return (
      <div className="home-feed-wrapper">
        {this.state.isLoading ? 
        <ReactLoading type={'cylon'} color={'grey'} height={100} width={100} />

        : (this.state.posts.length === 0 ? 
        <i>No nudes posted</i> : 
        this.state.posts.map(post => {
          return <PostCard post={post}/>
        }))
      }
      </div>
    );
  }
}
