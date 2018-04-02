import React, { Component } from 'react';
import { Button, Well } from 'react-bootstrap';
import './Receipt.css';


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
      <div className="receiptComponent">
        <Well>
          <input className="idInput" type="text" placeholder="Enter Id" onChange={ this.handleChange }></input>
        </Well>
        <Button className="idButton" bsStyle="success" onClick={ this.enterId }> get receipts! </Button>
        <div>
          { this.props.receiptResults }
        </div>
      </div>
    );
  }

}

export default Receipt;
