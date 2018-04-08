import React, { Component } from 'react';
import { Button, Well, Tab, Row, Nav, NavItem, Panel, Label } from 'react-bootstrap';
import './Receipt.css';


class Receipt extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: '',
      open: false,
      isLoading: false
    };
    this.handleIdInput = this.handleIdInput.bind(this);
    this.proveId = this.proveId.bind(this);
  }

  handleIdInput(event) {
    this.setState({
      id: event.target.value
    });
  }

  proveId() {
    let id = this.state.id;
    console.log(id);
    this.setState({ isLoading: true });

    this.props.actions.proveReceipt(id);
    this.props.actions.getReceipts(id);

    setTimeout(() => {
      this.setState({ isLoading: false, open: !this.state.open });
    }, 2000);

  }


  render() {
    const { isLoading } = this.state;
    return (
      <div className="receiptComponent">
        <Well className='idInputWell'>
          <input className="idInput" type="text" placeholder="Enter Id" onChange={ this.handleIdInput }></input>
          <br/>
          <Button className="idButton" bsStyle="success" disabled={isLoading}
          onClick={!isLoading ? this.proveId : null} > get receipts! </Button>
        </Well>
        <Panel id="collapsible-panel-example-1" expanded={ this.state.open } onToggle>
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
                      <Row>
                        <Label>Stamp Id:</Label>{" "+ this.props.stampId }
                      </Row>
                      <Row>
                        <Label>Stamp Hash:</Label>{" "+ this.props.stampHash }
                      </Row>
                      <Row>
                        <Label>BTC Merkle Root:</Label>{" "+ this.props.btcMerkleRoot }
                      </Row>
                      <Row>
                        <Label>BTC Anchor:</Label>{" "+ this.props.btcAnchor }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="eth">
                      <Row>
                        <Label>Stamp Id:</Label>{" "+ this.props.stampId }
                      </Row>
                      <Row>
                        <Label>Stamp Hash:</Label>{" "+ this.props.stampHash }
                      </Row>
                      <Row>
                        <Label>ETH Merkle Root:</Label>{" "+ this.props.ethMerkleRoot }
                      </Row>
                      <Row>
                        <Label>ETH Anchor:</Label>{" "+ this.props.ethAnchor }
                      </Row>
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
