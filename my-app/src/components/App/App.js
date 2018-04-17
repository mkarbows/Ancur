import React, { Component } from 'react';
import classnames from 'classnames';
import { Link } from 'react-router-dom';
import { Grid, Col, Row } from 'react-bootstrap';
import Stamp from '../../containers/StampContainer';
import Receipt from '../../containers/ReceiptContainer';
import logo from '../../images/ancur-logo.png';
import './style.css';
import 'bootstrap/dist/css/bootstrap.css';

class App extends Component {

  render() {
    const { className, ...props } = this.props;
    // className="App"
    return (
      <div className={classnames('App', className)} {...props} >
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

        <Link to='/'>About Ancur</Link>

      </div>
    );
  }
}

export default App;
