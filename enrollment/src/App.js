import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Enrollment from "./components/Enrollment";

class App extends Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h1 className="App-title">Welcome to React</h1>
                </header>
                <p>
              
                </p>
                <p className="App-intro">
                    To get started, edit <code>src/App.js</code> and save to reload.
                </p>

                <Enrollment/>
            </div>
        );
    }
}

export default App;
