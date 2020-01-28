import React, { Component } from 'react';
import Photo from '../Shared/photo';
import PersonTop from '../Person/PersonTop';
import { Link, withRouter } from 'react-router-dom';
const defaultProfile = '/images/logo.jpg';

class PostCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      img: ''
    };
  }
  componentDidMount() {
    // const {post} = this.props;
    // const img = Photo.toBlob(post.attrs.byteArray);
    // this.setState({
    //   img : img
    // })
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
          <img className='masonry-content' src={post.attrs.base64} alt={post.attrs.username} height={this.randomHeight()} />
        </div>
      </div>
    );
  }
}
export default withRouter(PostCard);
