import React, { Component } from 'react';

import classnames from 'classnames';

class Stamp extends Component {
  constructor(props) {
    super(props);
    this.stampingDocument = this.stampingDocument.bind(this);
  }

  stampingDocument(event) {
    this.props.actions.stampDoc(event.target.files[0]);
  }

  render() {
    const { className, ...props } = this.props;
    return (
      <div className={classnames('Stamp', className)} {...props}>
        <input id="upload" ref="upload" type="file" accept="*"
          onChange={ this.stampingDocument }
          onClick={(event)=> {
            event.target.value = null}} />

        <div>
          { this.props.results }
        </div>
    </div>

    );
  }

}

export default Stamp;
