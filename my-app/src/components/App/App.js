import React, { Component } from 'react';
import classnames from 'classnames';
// import { Link } from 'react-router-dom';
import logo from '../../images/ancur-logo.png';
import './style.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.stampingDocument = this.stampingDocument.bind(this);
    this.enterReceipt = this.enterReceipt.bind(this);
  }

  handleChange(event) {
    this.setState({ input: event.target.value });
  }

  stampingDocument(event) {
    // sending event.target.files[0] to dbTest to be stamped
    this.props.actions.stampDoc(event.target.files[0]);
    // this.props.actions.dbTest(event)
  }

  enterReceipt() {
    let receipt = this.state.input;
    // console.log('receipt:', receipt);
    // don't know if this is working and don't know if it is linked to actions index at all
    this.props.actions.proveReceipt(receipt);
  }

  render() {
    const { className, ...props } = this.props;
    return (
      <div className={classnames('App', className)} {...props}>
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </div>
        <br />
        <br />
        <input id="upload" ref="upload" type="file" accept="*"
          onChange={ this.stampingDocument }
          onClick={(event)=> {
            event.target.value = null
          }}
        />
        <br />
        <br />
        <input type="text" onChange={ this.handleChange } />
        <input type="button"
          onClick={ this.enterReceipt } value="Enter"/>

        <div style={{ padding: '30px' }}>{this.props.results}</div>
      </div>
    );
  }
}

export default App;
