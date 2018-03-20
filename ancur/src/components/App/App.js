import React, { Component } from 'react';
import classnames from 'classnames';
import { Link } from 'react-router-dom';
import logo from './logo.svg';
import './style.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.stampingDocument = this.stampingDocument.bind(this);
    this.enterId = this.enterId.bind(this);
  }

  handleChange(event) {
    this.setState({ input: event.target.value });
  }

  stampingDocument(event) {
    // sending event.target.files[0] to dbTest to be stamped
    console.log('event.target.files', event.target.files);
    this.props.actions.stampDoc(event.target.files[0]);
  }

  enterId() {
    let id = this.state.input;
    this.props.actions.proveReceipt(id);
  }

  render() {
    const { className, ...props } = this.props;
    return (
      <div className={classnames('App', className)} {...props}>
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React - Fullstack!</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Link to='about'><button>Test React Router</button></Link>
        <br />
        <br />
        <button onClick={this.props.actions.expressTest}>Test if Express is working</button>
        <br />
        <br />
        <button onClick={this.props.actions.dbTest}>Test if Express and Sequelize are working</button>

        // stamp document
        <input id="upload" ref="upload" type="file" accept="*"
          onChange={ this.stampingDocument }
          onClick={(event)=> {
            event.target.value = null
          }} />

        // prove receipt
        <input type="text" onChange={ this.handleChange } />
        <input type="button"
          onClick={ this.enterId } value="Enter"/>

        <div style={{ padding: '30px' }}>{this.props.results}</div>
      </div>
    );
  }
}

export default App;
