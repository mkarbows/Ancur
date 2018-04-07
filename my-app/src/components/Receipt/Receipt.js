import React, { Component } from 'react';
import { BtcEth } from '../../containers/BtcEthContainer';
import { Button, Well, Tab, Row, Col, Nav, NavItem, Panel } from 'react-bootstrap';
import './Receipt.css';


class Receipt extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: '',
      open: false
    };
    this.handleChange = this.handleChange.bind(this);
    this.enterId = this.enterId.bind(this);
    // this.displayResults = this.displayResults.bind(this);
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
    this.props.actions.getReceipts(id);
    console.log(this.props.proveReceiptResults);
    // this.setState({ open: !this.state.open });
  }

  // displayResults() {
  //   return ( <Well className='receiptWell' > { this.props.ethReceipt }</Well>)
  // }

  render() {
    // console.log(this.props.ethReceipt);
    // { this.displayResults() }
    return (
      <div className="receiptComponent">
        <Well className='idInputWell'>
          <input className="idInput" type="text" placeholder="Enter Id" onChange={ this.handleChange }></input>
        </Well>
        <Button className="idButton" bsStyle="success" onClick={ this.enterId }> get receipts! </Button>

        <Panel id="collapsible-panel-example-1" expanded={this.state.open} onToggle>
          <Panel.Collapse>
            <Panel.Body>
              yo
            </Panel.Body>
          </Panel.Collapse>
        </Panel>

        <Well>
          { this.props.isValid }
        </Well>

        <BtcEth />

        <Tab.Container id="left-tabs-example" defaultActiveKey="first">
          <Row className="clearfix">
            <Col sm={4}>
              <Nav bsStyle="pills" stacked>
                <NavItem eventKey="first">BTC Receipt</NavItem>
                <NavItem eventKey="second">ETH Receipt</NavItem>
              </Nav>
            </Col>
            <Col sm={8}>
              <Tab.Content animation>
                <Tab.Pane eventKey="first">{ this.props.btcReceipt }</Tab.Pane>
                <Tab.Pane eventKey="second">{ this.props.ethReceipt }</Tab.Pane>
              </Tab.Content>
            </Col>
          </Row>
        </Tab.Container>

      </div>
    );
  }

}

export default Receipt;
