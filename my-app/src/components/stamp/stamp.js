import React, { Component } from 'react';
import { Button, Well, Row, Panel, Label } from 'react-bootstrap';
import stampdocstext from '../../images/stampdocstext.png';
import './Stamp.css';

class Stamp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      documentSize: null,
      documentName: null,
      lastModified: null,
      open: false,
      isLoading: false
    };
    this.getInput = this.getInput.bind(this);
    this.stampingDocument = this.stampingDocument.bind(this);
  }

  getInput(event) {
    this.setState({
      documentSize: event.target.files[0].size,
      documentName: event.target.files[0].name,
      lastModified: event.target.files[0].lastModified
    });
  }

  stampingDocument(event) {
    this.setState({
      isLoading: true
    });

    this.props.actions.stampDoc(this.state.documentSize + this.state.documentName + this.state.lastModified);

    setTimeout(() => {
      this.setState({ isLoading: false, open: true });
    }, 2000);
  }

  render() {
    const { isLoading } = this.state;
    return (
      <div className="stampComponent">
        <img src={stampdocstext} alt="stampdocstext" className="stampdocstext"/>
        <Well className="stampInputWell">
          <input className="fileInput" type='file' label='Upload' accept='.txt, .pdf, .pages, .doc, .docx' onChange={ this.getInput } />

          <Button bsStyle="info" className="stampButton" disabled={isLoading}
          onClick={!isLoading ? this.stampingDocument : null}> stamp this! </Button>
        </Well>
        <Panel id="collapsible-panel-example-1" expanded={ this.state.open } onToggle>
          <Panel.Collapse>
            <Panel.Body>
              <Row>
                <Label>Stamp Id:</Label>{" "+ this.props.newStampId }
              </Row>
              <Row>
                <Label>Stamp Hash:</Label>{" "+ this.props.newStampHash }
              </Row>
              <Row>
                <Label>Stamp Token:</Label>{" "+ this.props.newStampToken }
              </Row>
              <Row>
                <Label>Time:</Label>{" "+ this.props.newStampTime }
              </Row>
              <Row>
                <Label>Estimated BTC Time:</Label>{" "+ this.props.newStampBtcTime + " seconds" }
              </Row>
              <Row>
                <Label>Estimated ETH Time:</Label>{" "+ this.props.newStampEthTime + " seconds" }
              </Row>
            </Panel.Body>
          </Panel.Collapse>
        </Panel>

      </div>
    );
  }

}

export default Stamp;
