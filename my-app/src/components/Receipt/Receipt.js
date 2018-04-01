import React, { Component } from 'react';
import { Button } from 'react-bootstrap';

class Receipt extends Component {

  // handleChange(event) {
    // this.setState({ input: event.target.value });
  // }
// enterId() {
    // let id = this.state.input;
    // this.props.actions.proveReceipt(id);
  // }

  render() {
    // const file = this.fileUpload.files[0];
    // console.log(file);
    return (
      <div>
        <h4>receipt </h4>
        <input type="text" placeholder="Enter Id"></input>
      </div>
    );
  }

}

export default Receipt;
