import React, { Component } from "react";
import PostCard from "./PostCard";
import Post from "../models/Post";
import ReactLoading from "react-loading";

export default class HomeFeed extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      isLoading: false
    };
  }
  componentDidMount() {
    this.setState({
      isLoading: true
    });
    this.fetchPosts().finally(() => {
      this.setState({
        isLoading: false
      });
    });
  }

  componentDidUpdate(prevProps) {
    if (
      prevProps.cameraModalIsOpen !== this.props.cameraModalIsOpen &&
      !this.props.cameraModalIsOpen
    ) {
      this.setState({
        isLoading: true
      });
      this.fetchPosts().finally(() => {
        this.setState({
          isLoading: false
        });
      });
    }
  }

  async fetchPosts() {
    const posts = await Post.fetchList({ sort: "-createdAt" });

    this.setState({
      posts: posts
    });
  }
  render() {
    return (
      <div className="home-feed-wrapper col-md-8 container">
        <div className="d-flex justify-content-center align-items-center">
          <a className="mr-2 link link-active" href="/">
            Public
          </a>
          <a className="mr-2 link-light link" href="/">
            Subscribed
          </a>
          <a href="/" className="link link-light">
            Collection
          </a>
        </div>
        {!this.props.hidden ? 
        <div class="masonry-wrapper">
          <div class="masonry">
            {this.state.isLoading ? (
               <div className="loading-wrapper" >
              <ReactLoading
                type={"spinningBubbles"}
                color={"salmon"}
                height={100}
                width={100}
              />
              </div>
            ) : this.state.posts.length === 0 ? (
              <i style={{ paddingTop: "10px" }}>No nudes posted</i>
            ) : (
              this.state.posts.map(post => {
                return <PostCard post={post} />;
              })
            )}
          </div>
        </div>
        :
        <div class="masonry-wrapper">
            <div class="masonry">
              <div class="masonry-item">
                <img
                  src="https://unsplash.it/529/529/"
                  alt="Dummy "
                  class="masonry-content"
                />
              </div>
              <div class="masonry-item">
                <img
                  src="https://unsplash.it/534/529/"
                  alt="Dummy "
                  class="masonry-content"
                />
              </div>
              <div class="masonry-item">
                <img
                  src="https://unsplash.it/525/529/"
                  alt="Dummy "
                  class="masonry-content"
                />
              </div>
              <div class="masonry-item">
                <img
                  src="https://picsum.photos/450/450?image=200"
                  alt="Dummy "
                  class="masonry-content"
                />
              </div>
              <div class="masonry-item">
                <img
                  src="https://picsum.photos/450/280?image=300"
                  alt="Dummy "
                  class="masonry-content"
                />
              </div>
              <div class="masonry-item">
                <img
                  src="https://picsum.photos/450/540?image=400"
                  alt="Dummy "
                  class="masonry-content"
                />
              </div>
              <div class="masonry-item">
                <img
                  src="https://picsum.photos/450/380?image=500"
                  alt="Dummy "
                  class="masonry-content"
                />
              </div>
              <div class="masonry-item">
                <img
                  src="https://picsum.photos/450/300?image=600"
                  alt="Dummy "
                  class="masonry-content"
                />
              </div>
              <div class="masonry-item">
                <img
                  src="https://picsum.photos/450/400?image=700"
                  alt="Dummy "
                  class="masonry-content"
                />
              </div>
              <div class="masonry-item">
                <img
                  src="https://picsum.photos/450/300?image=800"
                  alt="Dummy "
                  class="masonry-content"
                />
              </div>
              <div class="masonry-item">
                <img
                  src="https://picsum.photos/450/280?image=900"
                  alt="Dummy "
                  class="masonry-content"
                />
              </div>
              <div class="masonry-item">
                <img
                  src="https://picsum.photos/450/480?image=925"
                  alt="Dummy "
                  class="masonry-content"
                />
              </div>
              <div class="masonry-item">
                <img
                  src="https://picsum.photos/450/550?image=950"
                  alt="Dummy "
                  class="masonry-content"
                />
              </div>
              <div class="masonry-item">
                <img
                  src="https://picsum.photos/450/600?image=1000"
                  alt="Dummy "
                  class="masonry-content"
                />
              </div>
              <div class="masonry-item">
                <img
                  src="https://picsum.photos/450/325?image=25"
                  alt="Dummy "
                  class="masonry-content"
                />
              </div>
              <div class="masonry-item">
                <img
                  src="https://picsum.photos/450/450?image=50"
                  alt="Dummy "
                  class="masonry-content"
                />
              </div>
              <div class="masonry-item">
                <img
                  src="https://picsum.photos/450/280?image=75"
                  alt="Dummy "
                  class="masonry-content"
                />
              </div>
              <div class="masonry-item">
                <img
                  src="https://picsum.photos/450/540?image=100"
                  alt="Dummy "
                  class="masonry-content"
                />
              </div>
              <div class="masonry-item">
                <img
                  src="https://picsum.photos/450/380?image=125"
                  alt="Dummy "
                  class="masonry-content"
                />
              </div>
              <div class="masonry-item">
                <img
                  src="https://picsum.photos/450/300?image=161"
                  alt="Dummy "
                  class="masonry-content"
                />
              </div>
              <div class="masonry-item">
                <img
                  src="https://picsum.photos/450/400?image=175"
                  alt="Dummy "
                  class="masonry-content"
                />
              </div>
              <div class="masonry-item">
                <img
                  src="https://picsum.photos/450/300?image=200"
                  alt="Dummy "
                  class="masonry-content"
                />
              </div>
              <div class="masonry-item">
                <img
                  src="https://picsum.photos/450/280?image=225"
                  alt="Dummy "
                  class="masonry-content"
                />
              </div>
              <div class="masonry-item">
                <img
                  src="https://picsum.photos/450/480?image=250"
                  alt="Dummy "
                  class="masonry-content"
                />
              </div>
              <div class="masonry-item">
                <img
                  src="https://picsum.photos/450/550?image=275"
                  alt="Dummy "
                  class="masonry-content"
                />
              </div>
              <div class="masonry-item">
                <img
                  src="https://picsum.photos/450/600?image=300"
                  alt="Dummy "
                  class="masonry-content"
                />
              </div>
              <div class="masonry-item">
                <img
                  src="https://picsum.photos/450/325?image=13"
                  alt="Dummy "
                  class="masonry-content"
                />
              </div>
              <div class="masonry-item">
                <img
                  src="https://picsum.photos/450/450?image=26"
                  alt="Dummy "
                  class="masonry-content"
                />
              </div>
              <div class="masonry-item">
                <img
                  src="https://picsum.photos/450/280?image=39"
                  alt="Dummy "
                  class="masonry-content"
                />
              </div>
              <div class="masonry-item">
                <img
                  src="https://picsum.photos/450/540?image=52"
                  alt="Dummy "
                  class="masonry-content"
                />
              </div>
              <div class="masonry-item">
                <img
                  src="https://picsum.photos/450/380?image=65"
                  alt="Dummy "
                  class="masonry-content"
                />
              </div>
              <div class="masonry-item">
                <img
                  src="https://unsplash.it/524/524/"
                  alt="Dummy "
                  class="masonry-content"
                />
              </div>
              <div class="masonry-item">
                <img
                  src="https://unsplash.it/524/525/"
                  alt="Dummy "
                  class="masonry-content"
                />
              </div>
              <div class="masonry-item">
                <img
                  src="https://unsplash.it/524/529/"
                  alt="Dummy "
                  class="masonry-content"
                />
              </div>
              <div class="masonry-item">
                <img
                  src="https://unsplash.it/524/524/"
                  alt="Dummy "
                  class="masonry-content"
                />
              </div>
              <div class="masonry-item">
                <img
                  src="https://unsplash.it/524/525/"
                  alt="Dummy "
                  class="masonry-content"
                />
              </div>
              <div class="masonry-item">
                <img
                  src="https://unsplash.it/524/529/"
                  alt="Dummy "
                  class="masonry-content"
                />
              </div>
            </div>
          </div>
        }
      </div>
    );
  }
}
