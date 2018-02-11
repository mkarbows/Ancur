import React, { Component } from 'react';
import classnames from 'classnames';
import { Link } from 'react-router-dom';
import logo from './logo.svg';
import './style.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
    event.preventDefault();
    console.log("click");
    this.props.actions.dbTest("hello my file");
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
        <button onClick={this.handleSubmit}>Test if Express and Sequelize are working</button>
        <br />
        <br />
            <input id="upload" ref="upload" type="file" accept="*"
               onChange={(event)=> {
                   console.log(event.target.files[0]);
                   // sending event.target.files[0] to dbTest to be stamped
                   this.props.actions.dbTest(event.target.files[0]);
                   // this.props.actions.dbTest(event)
               }}

            onClick={(event)=> {
                   event.target.value = null
              }}

             />
        <div style={{ padding: '30px' }}>{this.props.results}</div>
      </div>
    );
  }
}

export default App;
