import React, { Component } from "react";
import { UserGroup } from "radiks/lib";
import FriendRequest from "../models/FriendRequest";
import CameraModal from "../Camera/CameraModal";
import { Camera, EyeOff } from "react-feather";
import HomeFeed from "./HomeFeed";

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cameraModalIsOpen: false
    };
  }
  componentDidMount() {}
  // async deleteUG(){
  //   const groups = await FriendRequest.fetchOwnList();
  //   console.log(groups)
  //   for(let group of groups){
  //     console.log(group)
  //     await group.destroy()
  //   }
  // }
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
      <div className="home-wrapper">
        <HomeFeed cameraModalIsOpen={this.state.cameraModalIsOpen}/>
        <button
          className="btn home-hide home-button"
        >
          <EyeOff size="24" />
        </button>
       
        <button
          className="btn home-camera home-button"
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
    );
  }
}
