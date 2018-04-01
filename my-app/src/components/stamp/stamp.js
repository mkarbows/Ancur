import React, { Component } from 'react';
// import classnames from 'classnames';
import { Button } from 'react-bootstrap';

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
    // console.log( event.target.files);
    this.state.document = event.target.files[0];
  }

  stampingDocument(event) {
    // console.log(this.state.document);
    this.props.actions.stampDoc(this.state.document);
  }

  render() {

    return (
      <div>
        <input type='file' label='Upload' accept='.txt, .pdf, .pages, .doc, .docx' onChange={this.getInput} />
        <Button bsStyle="info" onClick={ this.stampingDocument }> stamp this! </Button>
        <div>
          {this.props.results}
        </div>
      </div>
    );
  }

}

export default Stamp;
