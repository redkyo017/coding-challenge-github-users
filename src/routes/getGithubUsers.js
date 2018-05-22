import fetch from "node-fetch";

export default [
  async (req, res) => {
    let usernames = req.body.usernames || "";
    usernames = usernames.trim("");

    const usernameList = usernames.split(",") || [];

    const responses = [];
    const promises = [];

    usernameList.forEach(username => {
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
    
    res.render('index', {users: results});
  }
];