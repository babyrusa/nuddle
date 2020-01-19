import React, { Component } from "react";
import { Camera } from "react-feather";
import Webcam from "react-webcam";
import Modal from 'react-modal';
Modal.setAppElement('body')

const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
};

export default class CameraModal extends Component {
  constructor(props) {
    super(props);
    this.cam = React.createRef();
    this.state = {
      img: null,
      isTakingPicture: true
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
  resetPicture(){
    this.setState({ img: null, isTakingPicture: true });
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
          <>
            <img src={this.state.img} width={400} height={400} />
            <button
              className="btn camera-reset"
              onClick={() => { this.resetPicture() }}
            >
              <i class="fas fa-times"></i>
            </button>
            <button
              className="camera-button"
              onClick={() => { this.sendPicture() }}
            >
              <i class="fas fa-paper-plane"></i>
            </button>
          </>
        )}
      </div>
      </Modal>
    );
  }
}
