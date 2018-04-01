import React, { Component } from 'react';
import { Button } from 'react-bootstrap';

class Receipt extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.enterId = this.enterId.bind(this);
  }

  handleChange(event) {
    this.setState({
      id: event.target.value
    });
  }

  enterId() {
      let id = this.state.id;
      console.log(id);
      this.props.actions.proveReceipt(id);
    }

  render() {
    return (
      <div>
        <h4>receipt </h4>
        <input type="text" placeholder="Enter Id" onChange={ this.handleChange }></input>
        <Button onClick={ this.enterId }> get receipts! </Button>
        <div>
          { this.props.receiptResults }
        </div>
      </div>
    );
  }

}

export default Receipt;
