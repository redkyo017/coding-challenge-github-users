import React, { Component } from 'react';
import 'whatwg-fetch'

import AppComponent from "./Component";

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      usernames: "",
      githubUsers: [],
      isLoading: false,
    }
  }
  onInputUserNames = (usernames) => {
    this.setState({
      usernames
    })
  }
  onSubmit = async () => {
    let usernameList = this.state.usernames;
    usernameList = usernameList.trim("");
    usernameList = usernameList.split(",") || [];

    const responses = [];
    const promises = [];
    this.setState({
      isLoading: true,
    })
    usernameList.forEach(username => {
      if (!username || username === "") return;
      username = username.trim("");
      const requestUrl = `https://api.github.com/users/${username}`;
      const response = fetch(requestUrl, {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      });
      responses.push(response);
    });

    const users = await Promise.all(responses);
    for (let i=0;i < users.length; i++) {
      if (users[i] && users[i] !== null)
      promises.push(users[i].json());
    }
    let results = await Promise.all(promises) || [];
    results.sort(function (a, b) {
      return b.public_repos - a.public_repos;
    });
    results = results.sort();
    results = results.map( u => {
      let info = {name: "", repo: 0};
      info.name = u.login;
      info.repo = u.public_repos;
      return info;
    })


    this.setState({
      isLoading: false,
      githubUsers: results
    })

  }

  render() {
    return (
      <div className="App">
        <AppComponent 
          onInputUserNames={this.onInputUserNames}
          onSubmit={this.onSubmit}
          usernames={this.state.usernames}
          githubUsers={this.state.githubUsers}
          isLoading={this.state.isLoading}
        />
      </div>
    );
  }
}

export default App;
