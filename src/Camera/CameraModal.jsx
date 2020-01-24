import React, { Component } from "react";
import { Camera, XCircle, Send, Type } from "react-feather";
import Webcam from "react-webcam";
import Modal from "react-modal";
import NewPost from "../Post/NewPost";
import { SketchField, Tools } from "react-sketch";
import CameraTools from "./CameraTools";

Modal.setAppElement("body");

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    padding: "0px"
    // width : '100%',
    // height: '100%'
  }
};

export default class CameraModal extends Component {
  constructor(props) {
    super(props);
    this.cam = React.createRef();
    this._sketch = React.createRef();
    this.state = {
      img: null,
      isTakingPicture: true,
      showSendOption: false,
      penColor: "#000",
      text: "Click here to edit text"
    };
  } //monkey monkey monkey monkey monkey monkey monkey monkey

  takePicture() {
    const _img = this.cam.current.getScreenshot();

    this.setState({ img: _img, isTakingPicture: false }, () =>
      this._onBackgroundImageDrop(_img)
    );
  }

  /**
   * send picture via chat
   */
  sendPhoto(chatRoomId) {
    this.props.sendPhoto(this.state.img.split(",")[1], chatRoomId);
    this.props.closeModal();
  }

  /**
   * when user ready click show friendlist
   */
  readyToSend() {
    const _img = this._sketch.current.toDataURL();
    this.setState({
      img : _img,
      showSendOption: true
    });
  }

  _onBackgroundImageDrop(img) {
    let sketch = this._sketch.current;
    sketch.setBackgroundFromDataUrl(img, {
      stretched: true,
      stretchedX: false,
      stretchedY: false,
      originX: "left",
      originY: "top"
    });
  }

  _addText() {
    this._sketch.current.addText(this.state.text);
  }

  setPenColor(color) {
    this.setState({
      penColor: color
    });
  }
  resetPicture() {
    this.setState({ img: null, isTakingPicture: true, showSendOption: false });
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
                onClick={() => {
                  this.takePicture();
                }}
              ></button>
            </>
          ) : (
            <React.Fragment>
              <div className="photo-taken">
                <SketchField
                  width="640px"
                  height="480px"
                  tool={Tools.Pencil}
                  lineColor={this.state.penColor}
                  ref={this._sketch}
                  lineWidth={3}
                />
                <button
                  className="btn camera-reset"
                  onClick={() => {
                    this.resetPicture();
                  }}
                >
                  <XCircle />
                  
                </button>
                <button
                  className="btn"
                  onClick={this._addText.bind(this)}
                >
                <Type />
                </button>
                <button
                  className="camera-button camera-send"
                  onClick={() => {
                    this.readyToSend();
                  }}
                >
                  <Send color="rgb(231, 231, 231)" />
                </button>
                <CameraTools setPenColor={this.setPenColor.bind(this)} />
              </div>
              {this.state.showSendOption && (
                <NewPost
                  img={this.state.img}
                  sendPhoto={this.sendPhoto.bind(this)}
                  closeModal={this.props.closeModal}
                />
              )}
            </React.Fragment>
          )}
        </div>
      </Modal>
    );
  }
}
