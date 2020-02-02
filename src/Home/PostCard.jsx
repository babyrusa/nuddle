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
   this.getImgFromGaia();
  }

  componentDidUpdate(prevProps){
    if(prevProps.post !== this.props.post){
      this.getImgFromGaia();
    }
  }

  async getImgFromGaia(){
    const {post, userSession} = this.props;
    console.log(post.attrs.address)
    const img = await userSession.getFile(`${post.attrs.address}.json`,{ decrypt: false })
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
    const { post, userSession } = this.props;
    return (
      <div className='masonry-item' onClick={this.goToImg.bind(this,post)}>
        <div style={{ position: 'relative' }}>
          <div className='post-card-name'>
            <div>{post.attrs.caption}</div>
            {/* <PersonTop username={post.attrs.username} /> */}
          </div>
          {/* <img className='masonry-content' src={userSession.getFile(`${post.attrs.address}.json`,{ decrypt: false })} alt={post.attrs.username} height={this.randomHeight()} /> */}
        </div>
      </div>
    );
  }
}
export default withRouter(PostCard);
