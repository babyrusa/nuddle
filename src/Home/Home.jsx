import React, { Component } from "react";
import { UserGroup } from "radiks/lib";
import FriendRequest from "../models/FriendRequest";
import CameraModal from "../Camera/CameraModal";
import { Camera, EyeOff, Eye } from "react-feather";
import HomeFeed from "./HomeFeed";
import HomeMessage from "./HomeMessage";

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cameraModalIsOpen: false,
      hidden: false
    };
  }
  componentDidMount() {}

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
  onHide() {
    this.setState({
      hidden: !this.state.hidden
    });
  }
  render() {
    return (
      <div className="home-wrapper container-fluid">
        <div className="row">
          <div className="col">
            <HomeFeed
              cameraModalIsOpen={this.state.cameraModalIsOpen}
              hidden={this.state.hidden}
            />
          </div>
          {/* <div className="col-md-3">
            <HomeMessage />
          </div> */}
          {this.state.hidden ? (
            <button
              className="btn home-hide home-button"
              data-toggle="tooltip"
              title="Show Saucy Pics"
              onClick={this.onHide.bind(this)}
            >
              <Eye size="24" />
            </button>
          ) : (
            <button
              className="btn home-hide home-button"
              data-toggle="tooltip"
              title="Hide Saucy Pics"
              onClick={this.onHide.bind(this)}
            >
              <EyeOff size="24" />
            </button>
          )}
          <button
            className="btn home-camera home-button"
            data-toggle="tooltip"
            title="Open Camera"
            onClick={this.openCameraModal.bind(this)}
          >
            <Camera size="24" />
          </button>
          <CameraModal
            modalIsOpen={this.state.cameraModalIsOpen}
            closeModal={this.closeCameraModal.bind(this)}
            //  postPhoto={this.sendPhoto.bind(this)}
          />
        </div>
      </div>
    );
  }
}
