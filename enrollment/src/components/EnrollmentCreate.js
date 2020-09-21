import React from 'react';
import propTypes from 'prop-types';

export default class EnrollmentCreate extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            phone: "",
            stuId: ""
        };
        this.onChange = this.onChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.handleEnter = this.handleEnter.bind(this);
    }

    onChange(e) {
        let nextState = {};
        // 선택한 값의 이름 -> (input 태그의 name과 매핑 // value는 해당 태그의 value
        nextState[e.target.name] = e.target.value;
        this.setState(nextState);
    }

    handleEnter(e) {
        if (e.key === "Enter") {
            this.handleClick();
        }
    }

    handleClick() {
        const enrollment = {
            name: this.state.name,
            phone: this.state.phone,
            stuId: this.state.stuId
        };
        this.props.onCreate(enrollment);
        this.setState({
            name: "",
            phone: "",
            stuId: ""
        });
        this.nameInput.focus();
    }

    render() {
        return (
            <div>
                <p>
                    <input
                        type="text"
                        name="name"
                        placeholder={"이름쓰기"}
                        value={this.state.name}
                        onChange={this.onChange}
                        ref={(ref) => this.nameInput = ref}
                    />
                </p>
                <p>
                    <input
                        type="text"
                        name="phone"
                        placeholder={"전화번호 쓰기"}
                        value={this.state.phone}
                        onChange={this.onChange}
                    />
                </p>
                <p>
                    <input
                        type="text"
                        placeholder={"학번 쓰기"}
                        name="stuId"
                        value={this.state.stuId}
                        onChange={this.onChange}
                        onKeyPress={this.handleEnter}
                    />
                </p>
                <button onClick={this.handleClick}> 만들기</button>
            </div>
        )
    }
}

EnrollmentCreate.propTypes = {
    onCreate : propTypes.func
};

EnrollmentCreate.defaultProps = {
    onCreate : () => {
        console.error("onCreate Not Defined");
    }
};