import React, { Component } from 'react';
import Photo from '../Shared/photo';
import PersonTop from '../Person/PersonTop';
import { Link, withRouter } from 'react-router-dom';
import { getFile } from 'blockstack';
const defaultProfile = '/images/logo.jpg';

class PostCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      img: ''
    };
  }
  componentDidMount() {
    const {post} = this.props;
    if (post.attrs.base64) {
      this.setState({
        img : post.attrs.base64
      })
    } else {
      this.getImgFromGaia();
    }
  }

  componentDidUpdate(prevProps){
    const {post} = this.props;

    if(prevProps.post !== this.props.post){
      if (post.attrs.base64) {
        this.setState({
          img : post.attrs.base64
        })
      } else {
        this.getImgFromGaia();
      }    }
  }

  async getImgFromGaia() {
    const { post } = this.props;
    console.log(post.attrs.username)
    const img = await getFile(`${post.attrs.address}.json`, {
      username: post.attrs.username,
      decrypt: false
    });
    await this.setState({
      img : JSON.parse(img) || ''
    })
  }

  randomHeight(){
    const heights = [450, 280,
      550,
      480,
      200,
      540,
      380,
      300,
      400,
      350
      ]
    return heights[Math.floor(Math.random() * heights.length)]
  }
  goToImg(post) {
    this.props.history.push(`/p/${post.attrs._id}`);
  }
  render() {
    const { post } = this.props;
    return (
      <div className='masonry-item' onClick={this.goToImg.bind(this,post)}>
        <div style={{ position: 'relative' }}>
          <div className='post-card-name'>
            <div>{post.attrs.caption}</div>
            {/* <PersonTop username={post.attrs.username} /> */}
          </div>
          <img className='masonry-content' src={this.state.img} alt={post.attrs.username} height={this.randomHeight()} />
        </div>
      </div>
    );
  }
}
export default withRouter(PostCard);
