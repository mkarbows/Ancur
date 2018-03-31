import React, { Component } from 'react';
// import classnames from 'classnames';
// import { stampDoc } from '../actions/actions.js'
import { Button } from 'react-bootstrap';

class Stamp extends Component {
  constructor(props) {
    super(props);
  //   this.stampingDocument = this.stampingDocument.bind(this);
    this.clickFunctions = this.clickFunctions.bind(this);
  }

  // stampingDocument(event) {
  //   this.props.actions.stampDoc(event.target.files[0]);
  // }
  clickFunctions(test) {
    console.log('clicked');
    // console.log(this.props.actions);
    this.props.actions.stampDoc("test");
  }

  render() {
    // <div className={classnames('Stamp', className)} {...props}>
    //   <input id="upload" ref="upload" type="file" accept="*"
    //     onChange={ this.stampingDocument }
    //     onClick={(event)=> {
    //       event.target.value = null}} />
    //   <div>
    //     { this.props.results }
    //   </div>
    // </div>

    const { ...props } = this.props;
    return (
      <div>
        <Button bsStyle="info" onClick={this.clickFunctions}> test </Button>
        <div>
          { this.props.results }
        </div>
      </div>

    );
  }

}

export default Stamp;
