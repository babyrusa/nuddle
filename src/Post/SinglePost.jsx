import React, { Component } from "react";
import Post from "../models/Post";
import PersonTop from "../Person/PersonTop";
import { XCircle } from "react-feather";

export default class SinglePost extends Component {
  constructor(props) {
    super(props);

    this.state = {
      post: {
        attrs: {
          username: "Nudist",
          base64: null,
          address: null
        }
      },
      img: ""
    };
  }
  componentDidMount() {
    const id = this.props.match.params.postId;
    if (id) {
      this.getPost();
    } else {
      this.props.history.push("/");
    }
  }
  async getPost() {
    const id = this.props.match.params.postId;
    const post = await Post.findOne({ _id: id }, { decrypt: false });
    if (post) {
      this.setState(
        {
          post: post
        },
        () => {
          if (this.state.post.attrs.base64) {
            this.setState({
              img: this.state.post.attrs.base64
            });
          } else {
            this.getImgFromGaia();
          }
        }
      );
    } else {
      this.props.history.push("/");
    }
  }
  async getImgFromGaia() {
    const { post } = this.state;
    const { userSession } = this.props;
    const img = await userSession.getFile(`${post.attrs.address}.json`, {
      username: post.attrs.username,
      decrypt: false
    });
    await this.setState({
      img: JSON.parse(img) || ""
    });
  }
  render() {
    const { post, img } = this.state;
    return (
      <div className="single-post-wrapper">
        <div>
          <button className="btn btn-outline-light delete-button">
          <XCircle />
          </button>
          <img src={img} />
          <p>{post.attrs.caption}</p>
        </div>
      </div>
    );
  }
}
