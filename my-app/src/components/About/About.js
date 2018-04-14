// src/components/About/index.js
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Grid, Col, Row, Jumbotron, Panel } from 'react-bootstrap';
import classnames from 'classnames';
import logo from '../../images/ancur-logo.png';

import './style.css';

export default class About extends Component {
  render() {
    const { className, ...props } = this.props;
    return (
      <div className={classnames('About', className)} {...props}>
        <div className="About-header">
          <Jumbotron>
            <h1 className="About-header-text">
              What is
            </h1>
            <img src={logo} className="App-logo" alt="logo" />
          </Jumbotron>
        </div>

        <Grid>
          <Col md={12} >
            <Panel bsStyle="warning">
              <Panel.Body>
                <h3>
                  Ancur is a <em><b>blockchain-powered timestamping and certification platform</b></em> allowing you to <em><b>prove the existence, integrity and ownership</b></em> of all your documents.
                </h3>
                <h4>
                  <em><b>Stamp</b></em> your documents and <em><b>prove</b></em> the existence of your <em><b>receipts</b></em> on the <em><b>Bitcoin</b></em> and <em><b>Ethereum</b></em> blockchains.
                </h4>
              </Panel.Body>
            </Panel>
          </Col>
          <Row>
            <Col md={6} >
              <Panel bsStyle="info">
                <Panel.Heading>
                  <Panel.Title componentClass="h3">What does it mean to <em><b>stamp</b></em> a document ?</Panel.Title>
                </Panel.Heading>
                <Panel.Body className="stamp-info-body">
                  <ul>
                    <li>Use Ancur to embed unique hashes of your document into the Ethereum and Bitcoin blockchains.</li>
                    <li>Ancur's stamping feature will give you a receipt containing all the necessary data to prove the existence and integrity of your stamped document:  </li>
                      <ul>
                        <li> Stamp Id </li>
                        <li> Stamp Hash </li>
                        <li> Time when the document was stamped </li>
                        <li> Estimated time in seconds for the different receipt types (ethereum and bitcoin) to be ready for retrieval</li>
                      </ul>
                  </ul>
                </Panel.Body>
              </Panel>
            </Col>
            <Col md={6} >
              <Panel bsStyle="success">
                <Panel.Heading>
                  <Panel.Title componentClass="h3">What is <em><b>proving</b></em> a <em><b>receipt</b></em> ?</Panel.Title>
                </Panel.Heading>
                <Panel.Body>Panel content</Panel.Body>
              </Panel>
            </Col>
          </Row>
        </Grid>

        <div>
          <Link to='ancur'><button> Let's see it! </button></Link>
        </div>




      </div>
    );
  }
}
