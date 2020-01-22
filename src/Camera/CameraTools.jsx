import React, { Component } from "react";
import { HuePicker } from "react-color";

export default class CameraTools extends Component {
  constructor(props) {
    super(props);
    this.state = {
      color : '#000'
    };
  }
  handleChangeComplete(color) {
    this.setState({ background: color.hex });
    this.props.setPenColor(color.hex)
  }
  render() {
    return (
      <HuePicker
        color={this.state.background}
        onChange={this.handleChangeComplete.bind(this)}
      />
    );
  }
}
