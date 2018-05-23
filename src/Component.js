import React from 'react';
import logo from './logo.svg';
import './App.css';


class AppComponent extends React.PureComponent {
    _handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            this.props.onSubmit()
        }
    }
    render() {
        const { usernames = "", onInputUserNames, onSubmit, githubUsers=[], isLoading } = this.props;
        return (
            <div>
            {/* <div className="App"> */}
              <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <h1 className="App-title">Welcome to Github User Coding Challenger</h1>
              </header>
              <p className="App-intro">
                To get started, edit <code>src/App.js</code> and save to reload.
              </p>

              <div>
                  <div><b>Username :</b></div>
                  <textarea style={{ minWidth: "40%", minHeight: 300 }} type="text" required onChange={ e => onInputUserNames(e.target.value) } value={usernames} />

                  <br/>
                  <button onClick={onSubmit} onKeyPress={this._handleKeyPress}>Submit</button>
              </div>

              <br/>
              <div style={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column" }}>
                {isLoading ? <img src={logo} className="App-logo" alt="logo" /> : null}
                {githubUsers.length > 0 ? 
                    <table>
                        <tbody>
                            <tr>
                                <td>Name</td>
                                <td>Repo</td>
                            </tr>
                            {
                                githubUsers.map( (user, i) => {
                                    return (
                                        <tr key={i}>
                                            <td>{user.name}</td>
                                            <td>{user.repo}</td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                    : null }
                </div>

            </div>
        );
    }
}
export default AppComponent