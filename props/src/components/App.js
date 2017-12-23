import React from 'react';

class App extends React.Component {
    render() {
        return (
            <div>
                <h1>{this.props.propName}</h1>
                <div>{this.props.children}</div>
                <div>{this.props.value}</div>
                <div>{this.props.children}</div>
                <div>{this.props.secondValue}</div>
                <div>{this.props.thirdValue}</div>
            </div>
        );
    }
}

App.defaultProps = {
    value: "haams",
    secondValue: 1,
    thirdValue: 2
};

App.propTypes = {
    value: React.PropTypes.string.isRequired,
    secondValue: React.PropTypes.number,
    thirdValue: React.PropTypes.number
};

class ReactTest extends React.Component {
    render() {
        return (
            <App propName={this.props.propName}>{this.props.children}</App>
        )
    }
}

export {ReactTest, App};