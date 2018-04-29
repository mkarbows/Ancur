import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Grid, Col, Row, Jumbotron, Panel, Button } from 'react-bootstrap';
import classnames from 'classnames';
import logo from '../../images/ancur-logo.png';
import stamperyLogo from '../../images/stampery.png';
import stamperyUsage from '../../images/stampery-usage.png';

import './About.css';

export default class About extends Component {
  render() {
    const { className, ...props } = this.props;
    return (
      <div className={classnames('About', className)} {...props}>
        <div className="About-header">
          <Jumbotron className="jumbotron">
            <h1 className="About-header-text">
              What is
            </h1>
            <img src={logo} className="App-logo" alt="logo" />
          </Jumbotron>
        </div>

        <Grid >
          <Col md={12} >
            <Panel bsStyle="warning">
              <Panel.Body className="main-about">
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
                    <li>Ancur's <em><b>stamping</b></em> feature will give you a <em><b>receipt</b></em> containing all the necessary data to prove the existence and integrity of your <em><b>stamped</b></em> document:  </li>
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
                  <Panel.Title componentClass="h3">What does it mean to <em><b>prove</b></em> a <em><b>receipt</b></em> ?</Panel.Title>
                </Panel.Heading>
                <Panel.Body className="receipt-info-body">
                  <ul>
                    <li>
                      Once you've <em><b>stamped</b></em> a document, you can <em><b>prove</b></em> that your stamped document's receipt is <em><b>valid</b></em>
                    </li>
                    <ul>
                      <li>If your receipt is <em><b>valid</b></em> that means that the file from which the hash was calculated existed by the time the stamp was made</li>
                    </ul>
                    <li>
                      Ancur also allows you to view your stamped document's Bitcoin and Ethereum receipts
                    </li>
                    <li>Each reciept will contain: </li>
                      <ul>
                        <li>Stamp Id</li>
                        <li>Stamp Hash</li>
                        <li>Merkle Root</li>
                        <li>Bitcoin and Ethereum Anchors</li>
                      </ul>
                  </ul>
                </Panel.Body>
              </Panel>
            </Col>
          </Row>
          <Col md={12} className="stampery-about">
            <Panel bsStyle="warning">
              <Panel.Heading>
                <Panel.Title componentClass="h3">Stampery's BTA Technology</Panel.Title>
              </Panel.Heading>
              <Panel.Body >
                <a href="https://stampery.com/api">
                  <img src={stamperyUsage} alt="stampery-usage" className="stampery-usage"/>
                </a>
                <ul className="stampery-about-list">
                  <li>Each stamp connects every single stamped hash to a transaction contained in the next Ethereum and Bitcoin block.</li>
                  <li>This means that Ethereum receipts take ~30 seconds on average to be generated, while Bitcoin takes ~5 minutes.</li>
                  <li>Stampery's BTA technology aggregates all hashes received between one transaction and the next one by putting them inside a Merkle tree and then broadcasting the result of the aggregation—the Merkle root.</li>
                  <li>This allows Stampery to include millions of hashes in every transaction at a fraction of the cost and without loosing the immutabiity properties of public blockchains.</li>
                  <li>The proofs themselves contain only a few auxiliar hashes that when concurrently hashed together with your stamped hash, allow anyone to reconstruct the state of the Merkle tree at the very exact point in time when the stamping took place.</li>
                </ul>
                <a href="https://stampery.com/api">
                  <img src={stamperyLogo} alt="stampery-logo" className="stampery-logo"/>
                </a>
              </Panel.Body>
            </Panel>
          </Col>

        </Grid>

        <div className="homepage-button">
          <Link to='ancur'><Button bsStyle="warning"> Let's see it! </Button></Link>
        </div>

      </div>
    );
  }
}
