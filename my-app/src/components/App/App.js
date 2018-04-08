import React, { Component } from 'react';
import { Grid, Col, Row } from 'react-bootstrap';
import Stamp from '../../containers/StampContainer';
import Receipt from '../../containers/ReceiptContainer';
import logo from '../../images/ancur-logo.png';
import './style.css';
import 'bootstrap/dist/css/bootstrap.css';

class App extends Component {

  render() {
    return (
      <div className="App" >
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </div>

        <Grid >
          <Row >
            <Col md={6}>
              <Stamp />
            </Col>
            <Col md={6}>
              <Receipt />
            </Col>
          </Row>
        </Grid>

      </div>
    );
  }
}

export default App;
