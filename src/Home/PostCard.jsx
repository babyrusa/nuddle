import React, { Component } from 'react';
import Photo from '../Shared/photo';
import PersonTop from '../Person/PersonTop';
const defaultProfile = '/images/logo.jpg';

export default class PostCard extends Component {
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

  render() {
    const { post } = this.props;
    return (
      <div className='masonry-item'>
        <div style={{ position: 'relative' }}>
          <div className='post-card-name'>
            <PersonTop username={post.attrs.username} />
          </div>
          <img className='masonry-content' src={post.attrs.base64} alt={post.attrs.username} height={this.randomHeight()} />
        </div>
        <div>{post.attrs.caption}</div>
      </div>
    );
  }
}
