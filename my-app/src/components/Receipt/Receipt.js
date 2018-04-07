import React, { Component } from 'react';
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
    this.setState({ open: !this.state.open });
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
              yo
              <Well>
                { this.props.isValid }
              </Well>

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

            </Panel.Body>
          </Panel.Collapse>
        </Panel>

      </div>
    );
  }

}

export default Receipt;
