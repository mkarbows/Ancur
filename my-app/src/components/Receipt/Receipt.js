import React, { Component } from 'react';
import { Button, Well, Tab, Row, Nav, NavItem, Panel,ListGroup, ListGroupItem } from 'react-bootstrap';
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
    this.setState({
      open: !this.state.open
    });
    if(this.props.isValid !== '') {
      // this.setState({ open: !this.state.open });
    }
  }


  render() {
    return (
      <div className="receiptComponent">
        <Well className='idInputWell'>
          <input className="idInput" type="text" placeholder="Enter Id" onChange={ this.handleChange }></input>
        </Well>
        <Button className="idButton" bsStyle="success" onClick={ this.enterId }> get receipts! </Button>


        <Panel id="collapsible-panel-example-1" expanded={this.state.open} onToggle>
          <Panel.Collapse>
            <Panel.Body>
              <Well>
                { this.props.isValid }
              </Well>

              <Tab.Container id="left-tabs-example" defaultActiveKey="btc">
                <Row >
                  <Nav className="receiptNav" bsStyle="pills">
                    <NavItem eventKey="btc">BTC Receipt</NavItem>
                    <NavItem eventKey="eth">ETH Receipt</NavItem>
                  </Nav>

                  <Tab.Content animation>
                    <Tab.Pane eventKey="btc">
                      <ListGroup>
                        <ListGroupItem header="Stamp Id: ">{ this.props.stampId }</ListGroupItem>
                        <ListGroupItem header="Stamp Hash: ">{ this.props.stampHash }</ListGroupItem>
                        <ListGroupItem header="BTC Merkle Root: ">{ this.props.btcMerkleRoot }</ListGroupItem>
                        <ListGroupItem header="BTC Anchor: ">{ this.props.btcAnchor }</ListGroupItem>
                      </ListGroup>
                    </Tab.Pane>
                    <Tab.Pane eventKey="eth">
                      <ListGroup>
                        <ListGroupItem header="Stamp Id: ">{ this.props.stampId }</ListGroupItem>
                        <ListGroupItem header="Stamp Hash: ">{ this.props.stampHash }</ListGroupItem>
                        <ListGroupItem header="ETH Merkle Root: ">{ this.props.ethMerkleRoot }</ListGroupItem>
                        <ListGroupItem header="ETH Anchor: ">{ this.props.ethAnchor }</ListGroupItem>
                      </ListGroup>
                  </Tab.Pane>
                  </Tab.Content>
                </Row>
              </Tab.Container>

            </Panel.Body>
          </Panel.Collapse>
        </Panel>

      </div>
    );
  }

}

export default Receipt;
