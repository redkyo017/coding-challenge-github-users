# Heftybyte At Home Coding Challenge

#### Challenge:  Github User List

### Focus: Javascript
### Time: 2hrs
### Challenge:

Build a simple web app that lists Github users sorted by the number of repos they have. The UI should consist of:

- an input search box for users to enter a comma separated list of Github usernames into
- a button to start the search
- a vertical list of usernames along with number of repos below the search

Github has an open JSON API exposed over HTTPS. To fetch user data, use the /users endpoint with the Github username as the last path part like so:

**Request**

`https://api.github.com/users/esco`

**Response**
```json
{
  "login": "esco",
  "id": 375773,
  "avatar_url": "https://avatars3.githubusercontent.com/u/375773?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/esco",
  "html_url": "https://github.com/esco",
  "followers_url": "https://api.github.com/users/esco/followers",
  "following_url": "https://api.github.com/users/esco/following{/other_user}",
  "gists_url": "https://api.github.com/users/esco/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/esco/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/esco/subscriptions",
  "organizations_url": "https://api.github.com/users/esco/orgs",
  "repos_url": "https://api.github.com/users/esco/repos",
  "events_url": "https://api.github.com/users/esco/events{/privacy}",
  "received_events_url": "https://api.github.com/users/esco/received_events",
  "type": "User",
  "site_admin": false,
  "name": "Esco Obong",
  "company": "@Uber",
  "blog": "https://twitter.com/escobyte",
  "location": "NYC",
  "email": null,
  "hireable": null,
  "bio": null,
  "public_repos": 69,
  "public_gists": 4,
  "followers": 49,
  "following": 4,
  "created_at": "2010-08-25T14:45:27Z",
  "updated_at": "2017-08-13T10:47:26Z"
}
```
### Submission
Push your code to this repo within 2hrs after starting.

### Take Note

The challenge may seem simple, but keep in mind we are judging the following factors:

- Code Quality (clean code)
- Performance (bandwidth, latency..etc)
- Code Organization (excellent code structure)
- Proficiency with JavaScript (modern features)


**Good Luck!**
