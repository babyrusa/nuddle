import React, { Component } from "react";
import { Camera } from "react-feather";
import Webcam from "react-webcam";
import Modal from 'react-modal';
import NewPost from "../Post/NewPost";
Modal.setAppElement('body')

const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)',
    padding : '0px',
    // width : '100%',
    // height: '100%'
  }
};

export default class CameraModal extends Component {
  constructor(props) {
    super(props);
    this.cam = React.createRef();
    this.state = {
      img: null,
      isTakingPicture: true,
      showSendOption: false
    };
  } //monkey monkey monkey monkey monkey monkey monkey monkey

  takePicture(){
    const _img = this.cam.current.getScreenshot();
    this.setState({ img: _img, isTakingPicture: false });
  }
  sendPicture(){
    this.props.postPhoto(this.state.img.split(',')[1])
    this.props.closeModal()
  }
  readyToSend(){
   this.setState({
    showSendOption : true
   }) 
  }
  resetPicture(){
    this.setState({ img: null, isTakingPicture: true, showSendOption : false });
  }
  render() {
    return (
      <Modal
        isOpen={this.props.modalIsOpen}
        onRequestClose={this.props.closeModal}
        style={customStyles}
        contentLabel="Camera"
      >
      <div className="camera-wrap">
        {this.state.isTakingPicture ? (
          <>
            <Webcam ref={this.cam} mirrored={true} />
            <button
              className="camera-button"
              onClick={() => { this.takePicture() }}
            >
            </button>
          </>
        ) : (
          <React.Fragment>
          <div>
            <img src={this.state.img} width={400}  />
            <button
              className="btn camera-reset"
              onClick={() => { this.resetPicture() }}
            >
              <i class="fas fa-times"></i>
            </button>
            <button
              className="camera-button"
              onClick={() => { this.readyToSend() }}
            >
              <i class="fas fa-paper-plane"></i>
            </button>
          </div>
          {this.state.showSendOption && <NewPost/>}
          </React.Fragment>
        )}
      </div>
      </Modal>
    );
  }
}
