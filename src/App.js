import React, { Component } from 'react';
import axios from 'axios';
import Nav from './Nav';

class App extends Component {
  constructor() {
    super();
    this.state = {
      github: {
        url: "https://api.github.com/users",
        client_id: "e0774b4fc4223fe4370a",
        client_secret: "7a107581f13d49c58f7919e103d010aad9e17db5",
        count: 7,
        sort: "created: asc"
      },
      user: [],
      repos: []
    };
  }

  getUser = e => {
    const user = e.target.value;

    const { url, client_id, client_secret, count, sort } = this.state.github;
    axios
      .get(
        `${url}/${user}?client_id=${client_id}&client_secret=${client_secret}`
      )
      .then(({ data }) => this.setState({ user: data}));
  };
  render() {
    console.log(this.state.user);
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
