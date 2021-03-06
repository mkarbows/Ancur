import React, { Component } from 'react';
import { Button, Well, Tab, Row, Nav, NavItem, Panel, Label, Col } from 'react-bootstrap';
import validreceipttext from '../../images/validreceipttext.png';
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
    this.setState({ isLoading: true });

    this.props.actions.proveReceipt(id);
    this.props.actions.getReceipts(id);

    setTimeout(() => {
      if(this.props.error !== true) {
        this.setState({ isLoading: false});
        alert("Looks like something went wrong or there are no receipts associated with the id you entered... Give it a go one more time!");
      } else {
        this.setState({ isLoading: false, open: true });
      }
    }, 2000);

  }

  render() {
    const { isLoading } = this.state;
    return (
      <div className="receiptComponent">
        <img src={validreceipttext} alt="validreceipttext" className="validreceipttext"/>
        <Well className='idInputWell'>
          <input className="idInput" type="text" placeholder="Enter Id" onChange={ this.handleIdInput }></input>
          <br/>
          <Button className="idButton" bsStyle="success" disabled={isLoading || !this.state.id}
          onClick={!isLoading ? this.proveId : null} > get receipts! </Button>
        </Well>

        <Panel id="collapsible-panel-example-1" expanded={ this.state.open } onToggle>
          <Panel.Collapse>
            <Panel.Body>
              <Well>
                <a style={{color: 'green'}}>{ this.props.isValid.toUpperCase() } !!</a><br/>
                The document associated with the Stamp Id <b>{ this.props.stampId }</b> is <b>valid</b> on the Bitcoin blockchain!
              </Well>

              <Tab.Container id="left-tabs-example" defaultActiveKey="btc">
                <Row >
                  <Nav className="receiptNav" bsStyle="pills">
                    <NavItem eventKey="btc">BTC Receipt</NavItem>
                    <NavItem eventKey="eth">ETH Receipt</NavItem>
                  </Nav>

                  <Tab.Content animation>
                    <Tab.Pane eventKey="btc">
                      <Col md={11} className="receiptContent">
                        <Row>
                          <Label>Stamp Id:</Label>
                          <br/>{" "+ this.props.stampId }
                        </Row>
                        <Row>
                          <Label>Stamp Hash:</Label>{" "+ this.props.stampHash }
                        </Row>
                        <Row>
                          <Label>BTC Merkle Root:</Label>{" "+ this.props.btcMerkleRoot }
                        </Row>
                        <Row>
                          <Label>BTC Anchor Source Id:</Label>{" "+ this.props.btcAnchorId }
                        </Row>
                        <Row>
                          <Label>BTC Anchor Type:</Label>
                          <br/>{" "+ this.props.btcAnchorType }
                        </Row>
                      </Col>
                    </Tab.Pane>
                    <Tab.Pane eventKey="eth">
                      <Col md={11} className="receiptContent">
                        <Row>
                          <Label>Stamp Id:</Label>
                          <br/>{" "+ this.props.stampId }
                        </Row>
                        <Row>
                          <Label>Stamp Hash:</Label>{" "+ this.props.stampHash }
                        </Row>
                        <Row>
                          <Label>ETH Merkle Root:</Label>{" "+ this.props.ethMerkleRoot }
                        </Row>
                        <Row>
                          <Label>ETH Anchor Source Id:</Label>{" "+ this.props.ethAnchorId }
                        </Row>
                        <Row>
                          <Label>ETH Anchor Type:</Label>
                          <br/>{" "+ this.props.ethAnchorType }
                        </Row>
                      </Col>
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
