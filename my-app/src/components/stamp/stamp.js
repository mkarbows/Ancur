import React, { Component } from 'react';
import { Button, Well } from 'react-bootstrap';
import './Stamp.css';

class Stamp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      document: null
    };
    this.getInput = this.getInput.bind(this);
    this.stampingDocument = this.stampingDocument.bind(this);
  }

  getInput(event) {
    this.setState({
      document: event.target.files[0]
    });
  }

  stampingDocument(event) {
    this.props.actions.stampDoc(this.state.document);
  }

  render() {

    return (
      <div className="stampComponent">
        <Well>
          <input className="fileInput" type='file' label='Upload' accept='.txt, .pdf, .pages, .doc, .docx' onChange={this.getInput} />
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
