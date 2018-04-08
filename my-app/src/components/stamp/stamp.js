import React, { Component } from 'react';
import { Button, Well } from 'react-bootstrap';
import './Stamp.css';

class Stamp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      documentSize: null,
      documentName: null,
      lastModified: null
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
    // console.log(this.state.document);
  }

  stampingDocument(event) {
    // console.log(this.state.documentSize);
    // console.log(this.state.documentName);
    // console.log(this.state.lastModified);

    this.props.actions.stampDoc(this.state.documentSize + this.state.documentName + this.state.lastModified);
  }

  render() {

    return (
      <div className="stampComponent">
        <Well className="stampInputWell">
          <input className="fileInput" type='file' label='Upload' accept='.txt, .pdf, .pages, .doc, .docx' onChange={ this.getInput } />
        </Well>

        <Button bsStyle="info" onClick={ this.stampingDocument }> stamp this! </Button>
        <div>
          { this.props.results }
        </div>
      </div>
    );
  }

}

export default Stamp;
