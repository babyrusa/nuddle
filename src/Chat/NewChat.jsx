import React, { Component } from "react";
import Modal from 'react-modal';
import FriendList from "./FriendList";
Modal.setAppElement('body')

const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)',
    width : '500px'
  }
};

export default class NewChat extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  } 
  render() {
    return (
      <Modal
        isOpen={this.props.modalIsOpen}
        onRequestClose={this.props.closeModal}
        style={customStyles}
        contentLabel="New Chat"
      >
        <FriendList/>
     </Modal>
    );
  }
}
