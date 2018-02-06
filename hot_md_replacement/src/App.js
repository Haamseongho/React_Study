import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h1 className="App-title">Welcome to React</h1>
                </header>
                <p className="App-intro">
                    To get started, edit <code>src/App.js</code> and save to reload.
                </p>
            </div>
        );
    }
}

class Test extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: " "
        }
        this.nameClick = this.nameClick.bind(this);
    }

    nameClick() {
        this.setState({
            name: this.state.name = "seongho!"
        })
    }

    render() {
        return (
            <div>
                <button onClick={this.nameClick}> Click me!!!!!</button>
                <h2>Hello !! {this.state.name}</h2>
            </div>
        )
    }
}

export {App, Test};