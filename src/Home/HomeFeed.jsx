import React, { Component } from "react";
import Post from "../models/Post";
import ReactLoading from "react-loading";
import Feed from "./PostWrapper";

export default class HomeFeed extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      isLoading: false,
      feed : 'public'
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
    const posts = await Post.fetchList({ sort: "-createdAt" }, {decrypt : false});

    this.setState({
      posts: posts
    });
  }

  changeFeed(feed){
    this.setState({
      feed : feed
    })
  }
  render() {
    return (
      <div className="home-feed-wrapper col-md-8 container">
        <div className="d-flex justify-content-center align-items-center">
          <a className="mr-2 link link-active feed-tab" data-toggle="tooltip" title="Everyone's public posts"
          onClick={this.changeFeed.bind(this, 'public')}>
            Public
          </a>
          <a className="mr-2 link-light link feed-tab"  data-toggle="tooltip" title="Your friends' private posts"
          onClick={this.changeFeed.bind(this, 'private')}>
            Private
          </a>
          {/* <a href="/" className="link link-light">
            Collection
          </a> */}
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
            ) : (this.state.feed === 'public' ? <Feed posts = {this.state.posts}/>
            :
            "Private feed is in the work")}
          </div>
        </div>
        :
        <div class="masonry-wrapper">
            <div class="masonry">
              <div class="masonry-item">
                <img
                  src="/images/dummy/dummy1.JPG"
                  alt="Dummy"
                  width="auto"
                  height="400"
                  class="masonry-content"
                />
              </div>
              <div class="masonry-item">
                <img
                  src="/images/dummy/dummy2.JPG"
                  alt="Dummy"
                  height="300"
                  width="auto"
                  class="masonry-content"
                />
              </div>
              <div class="masonry-item">
                <img
                  src="/images/dummy/dummy3.JPG"
                  alt="Dummy"
                  width="auto"
                  height="400"
                  class="masonry-content"
                />
              </div>
              <div class="masonry-item">
                <img
                  src="/images/dummy/dummy4.JPG"
                  alt="Dummy "
                  width="auto"
                  height="290"
                  class="masonry-content"
                />
              </div>
              <div class="masonry-item">
                <img
                  src="/images/dummy/dummy5.JPG"
                  alt="Dummy "
                  width="auto"
                  height="240"
                  class="masonry-content"
                />
              </div>
              <div class="masonry-item">
                <img
                  src="/images/dummy/dummy6.JPG"
                  alt="Dummy "
                  width="auto"
                  height="440"
                  class="masonry-content"
                />
              </div>
              <div class="masonry-item">
                <img
                  src="/images/dummy/dummy7.JPG"
                  alt="Dummy "
                  width="auto"
                  height="430"
                  class="masonry-content"
                />
              </div>
              <div class="masonry-item">
                <img
                  src="/images/dummy/dummy8.JPG"
                  alt="Dummy "
                  width="auto"
                  height="500"
                  class="masonry-content"
                />
              </div>
              <div class="masonry-item">
                <img
                  src="/images/dummy/dummy9.JPG"
                  alt="Dummy "
                  width="auto"
                  height="290"
                  class="masonry-content"
                />
              </div>
              <div class="masonry-item">
                <img
                  src="/images/dummy/dummy10.JPG"
                  alt="Dummy "
                  width="auto"
                  height="450"
                  class="masonry-content"
                />
              </div>
              <div class="masonry-item">
                <img
                  src="/images/dummy/dummy11.JPG"
                  alt="Dummy "
                  width="auto"
                  height="550"
                  class="masonry-content"
                />
              </div>
              <div class="masonry-item">
                <img
                 src="/images/dummy/dummy12.JPG"
                 alt="Dummy "
                  width="auto"
                  height="480"
                 class="masonry-content"
                />
              </div>
              <div class="masonry-item">
                <img
                  src="/images/dummy/dummy13.JPG"
                  alt="Dummy "
                  width="auto"
                  height="480"
                  class="masonry-content"
                />
              </div>
              <div class="masonry-item">
                <img
                  src="/images/dummy/dummy14.JPG"
                  alt="Dummy "
                  width="auto"
                  height="480"
                  class="masonry-content"
                />
              </div>
              <div class="masonry-item">
                <img
                  src="/images/dummy/dummy15.JPG"
                  alt="Dummy "
                  width="auto"
                  height="480"
                  class="masonry-content"
                />
              </div>
              <div class="masonry-item">
                <img
                  src="/images/dummy/dummy16.JPG"
                  alt="Dummy "
                  width="auto"
                  height="480"
                  class="masonry-content"
                />
              </div>
              <div class="masonry-item">
                <img
                 src="/images/dummy/dummy17.JPG"
                 alt="Dummy "
                  width="auto"
                  height="480"
                 class="masonry-content"
                />
              </div>
              <div class="masonry-item">
                <img
                  src="/images/dummy/dummy18.JPG"
                  alt="Dummy "
                  width="auto"
                  height="480"
                  class="masonry-content"
                />
              </div>
              <div class="masonry-item">
                <img
                  src="/images/dummy/dummy19.JPG"
                  alt="Dummy "
                  width="auto"
                  height="280"
                  class="masonry-content"
                />
              </div>
              <div class="masonry-item">
                <img
                  src="/images/dummy/dummy20.JPG"
                  alt="Dummy"
                  width="auto"
                  height="480"
                  class="masonry-content"
                />
              </div>
              <div class="masonry-item">
                <img
                  src="/images/dummy/dummy21.JPG"
                  alt="Dummy"
                  width="auto"
                  height="480"
                  class="masonry-content"
                />
              </div>
              <div class="masonry-item">
                <img
                 src="/images/dummy/dummy22.JPG"
                 alt="Dummy "
                  width="auto"
                  height="420"
                 class="masonry-content"
                />
              </div>
              <div class="masonry-item">
                <img
                  src="/images/dummy/dummy23.JPG"
                  alt="Dummy"
                  width="auto"
                  height="250"
                  class="masonry-content"
                />
              </div>
              <div class="masonry-item">
                <img
                  src="/images/dummy/dummy24.JPG"
                  alt="Dummy"
                  width="auto"
                  height="400"
                  class="masonry-content"
                />
              </div>
              <div class="masonry-item">
                <img
                  src="/images/dummy/dummy25.JPG"
                  alt="Dummy"
                  width="auto"
                  height="550"
                  class="masonry-content"
                />
              </div>
              <div class="masonry-item">
                <img
                  src="/images/dummy/dummy26.JPG"
                  alt="Dummy"
                  width="auto"
                  height="300"
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
