import React, { Component } from "react";
import { Smile } from "react-feather";
import { Picker } from "emoji-mart";
import "emoji-mart/css/emoji-mart.css";

const TEXT_LIMIT = 1000;

export default class MessageInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newComment: "",
      characters: 0,
      showEmojiPicker: false
    };
  }
  addEmoji(emoji) {
    this.setState({
      newComment: this.state.newComment + emoji.native,
      characters: this.state.characters + 1
    });
  }
  setNewComment(event) {
    // console.log(event.target, event.keyCode, event.key)
    if (this.state.characters < TEXT_LIMIT) {
      this.setState({
        newComment: event.target.value,
        characters: event.target.value.length
      });
    if(event.target.value.length >= TEXT_LIMIT){

    }
    }
  }

  handleChange(event) {
    var appropriateLengthWords = event.target.value.substring(0, TEXT_LIMIT -1)
    this.setState(
        {
            newComment: appropriateLengthWords,
            characters: (TEXT_LIMIT - event.target.value.length)
        }
    );
}
  toggleEmojiPicker() {
    this.setState({
      showEmojiPicker: !this.state.showEmojiPicker
    });
  }

  render() {
    return (
      <div
        style={{ width: "100%", display: "flex", flexDirection: " column " }}
      >
        <textarea
          id="commentInput"
          type="text"
          className="form-control"
          placeholder="Drop a thought..."
          value={this.state.newComment}
          onChange={this.handleChange.bind(this)}
          // onKeyDown={event => this.postComment(event)}
        />
        <div style={{ alignSelf: "flex-end" }}>
          <small>
            {this.state.characters}/{TEXT_LIMIT}
          </small>
        </div>
      </div>
    );
  }
}
