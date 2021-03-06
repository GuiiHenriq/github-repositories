import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import Nav from './Nav';
import Profile from './Profile';
import Repo from './Repo';

// Github API Integration
class App extends Component {
  constructor() {
    super();
    this.state = {
      github: {
        url: "https://api.github.com/users",
        client_id: "e0774b4fc4223fe4370a",
        client_secret: "7a107581f13d49c58f7919e103d010aad9e17db5",
        count: 300,
        sort: "created: asc"
      },
      user: [],
      repos: []
    };
  }

  // Function to display the Profile and Repositories
  getUser = e => {
    const user = e.target.value;

    const { url, client_id, client_secret, count, sort } = this.state.github;
    axios
      .get(
        `${url}/${user}?client_id=${client_id}&client_secret=${client_secret}`
      )
      .then(({ data }) => this.setState({ user: data}));
    
    axios
      .get(
        `${url}/${user}/repos?per_page=${count}&sort=${sort}&client_id=${client_id}&client_secret=${client_secret}`
      )
      .then(({ data }) => this.setState({ repos: data }));
  };

  // JSX Show Profiles and Repositories
  renderProfile = () => {
    const { user, repos } = this.state;

    return (
      <div className="row">
	      <div className="col-md-4">
          <Profile user={user} />
        </div>

	      <div className="col-md-8">
          {repos.map(repo => (
            <Repo key={repo.name} repo={repo} />
          ))}
        </div>
      </div>
    );
  };

  // JSX search input
  render() {
    return (
      <div className="App">
        <Nav />

        <div className="container">
          <div className="card card-body no-border">
          <h1>Search Profile</h1>
          <p className="lead">Enter a username and see all the profile details</p>
          <input onChange={this.getUser} id="search" type="text" className="form-control" required />
          </div>
          {this.state.user.lenght !== 0 ? this.renderProfile() : null}
        </div>
      </div>
    );
    // if the lenght of the user is nonzero, render the prop 'user'
  }
}

export default App;
