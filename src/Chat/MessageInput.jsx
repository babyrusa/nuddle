import React, { Component } from "react";
import { Smile } from "react-feather";
import { Picker } from "emoji-mart";
import "emoji-mart/css/emoji-mart.css";
import { Camera } from "react-feather";
import { Link } from "react-router-dom";
import CameraModal from "../Camera/CameraModal";
import Message from "../models/Message"
import Photo from "../Shared/photo";


const TEXT_LIMIT = 1000;

export default class MessageInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newComment: "",
      characters: TEXT_LIMIT,
      showEmojiPicker: false,
      cameraModalIsOpen: false
    };
  }
  componentDidMount(){
  }
  addEmoji(emoji) {
    this.setState({
      newComment: this.state.newComment + emoji.native,
      characters: this.state.characters + 1
    });
  }
  /**
   * not being used
   * @param {*} event 
   */
  setNewComment(event) {
    if (this.state.characters < TEXT_LIMIT) {
      this.setState({
        newComment: event.target.value,
        characters: event.target.value.length
      });
      if (event.target.value.length >= TEXT_LIMIT) {
      }
    }
  }
  async sendMessage(event){
    if(event.key === "Enter"){
      event.preventDefault()
      try {
        const newMessage = await Message.sendTextMsg(this.state.newComment, this.props.chatRoomId)
        await this.props.sendMessage(newMessage)
        await this.setState({
          newComment : '',
          characters: TEXT_LIMIT
        })
      } catch(e){

      }
    }
  }
  async sendPhoto(b64Data, chatRoomId){
    const {userSession} = this.props;

    const byteArray = Photo.b64tobinary(b64Data)
    try {
      const newMessage = await Message.sendPhotoMsg(byteArray, chatRoomId)
      await this.props.sendMessage(newMessage)
    } catch(e){

    }
  }
  
  handleChange(event) {
    var appropriateLengthWords = event.target.value.substring(
      0,
      TEXT_LIMIT - 1
    );
    this.setState({
      newComment: appropriateLengthWords,
      characters: TEXT_LIMIT - event.target.value.length
    });
  }
  toggleEmojiPicker() {
    this.setState({
      showEmojiPicker: !this.state.showEmojiPicker
    });
  }
  openCameraModal() {
    this.setState({
      cameraModalIsOpen: true
    });
  }
  closeCameraModal() {
    this.setState({
      cameraModalIsOpen: false
    });
  }

  

  render() {
    return (
      <div className="input-wrapper">
        <div>
          <div
            style={{
              width: "100%",
              display: "flex",
              flexDirection: " column "
            }}
          >
            <textarea
              id="commentInput"
              type="text"
              className="form-control"
              placeholder="Drop a thought..."
              value={this.state.newComment}
              onChange={this.handleChange.bind(this)}
              onKeyDown={event => this.sendMessage(event)}
            />
            <div style={{ alignSelf: "flex-end" }}>
              <small>
                {this.state.characters}/{TEXT_LIMIT}
              </small>
            </div>
          </div>
        </div>
        <div
          className="emoji-div"
          style={{ alignSelf: "flex-start", position: "relative" }}
        >
          <button
            type="button "
            className="btn btn-emoji"
            data-toggle="tooltip"
            title="Insert an emoji"
            onClick={this.toggleEmojiPicker.bind(this)}
            style={{ paddingTop: "5px" }}
          >
            <Smile size={"24"} />
          </button>
          <button
            className="btn btn-emoji"
            onClick={this.openCameraModal.bind(this)}
          >
            <Camera size="24" />
          </button>
          {this.state.showEmojiPicker && (
            <Picker set="emojione" onSelect={this.addEmoji.bind(this)} />
          )}
        </div>
        <CameraModal
          userSession={this.props.userSession}
          modalIsOpen={this.state.cameraModalIsOpen}
          closeModal={this.closeCameraModal.bind(this)}
          sendPhoto={this.sendPhoto.bind(this)}
        />
      </div>
    );
  }
}
