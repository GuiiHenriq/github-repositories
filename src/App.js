import React, { Component } from 'react';
import Nav from './Nav';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />

        <div className="container">
        <div className="card card-body">
        <h1>Search</h1>
        <p className="lead">Digite um Nome</p>
        <input onChange={this.getUser} id="search" type="text" className="form-control" required />
        </div>
        </div>

      </div>
    );
  }
}

export default App;
