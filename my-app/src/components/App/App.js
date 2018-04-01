import React, { Component } from 'react';
import { Grid, Col, Row } from 'react-bootstrap';

import Stamp from '../../containers/StampContainer';
import Receipt from '../../containers/ReceiptContainer';
import logo from '../../images/ancur-logo.png';
import './style.css';
import 'bootstrap/dist/css/bootstrap.css';

class App extends Component {
  // constructor(props) {
    // super(props);
    // this.handleChange = this.handleChange.bind(this);
    // this.stampingDocument = this.stampingDocument.bind(this);
    // this.enterId = this.enterId.bind(this);
  // }

  // stampingDocument(event) {
    // sending event.target.files[0] to dbTest to be stamped
    // console.log('event.target.files', event.target.files);
    // this.props.actions.stampDoc(event.target.files[0]);
  // }


  render() {
    // <Row className="App-features">
    //   <Col md={4} className="upload">
    //     <input id="upload" ref="upload" type="file" accept="*"
    //       onChange={ this.stampingDocument }
    //       onClick={(event)=> {
    //         event.target.value = null
    //       }} />
    //   </Col>
    //   <Col md={4}>
    //     <input type="text" onChange={ this.handleChange } />
    //     <input type="button"
    //       onClick={ this.enterId } value="Enter"/>
    //   </Col>
    // </Row>

    // const { className, ...props } = this.props;
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
