import React from 'react';
import propTypes from 'prop-types';

export default class ContactCreate extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            phone: "",
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    // 변동 사항 정리해서 주기
    handleChange(e) {
        let nextState = {}; // 여러개 인풋 처리 가능
        // e.target.name --> 여기 name 은 input 데이터의 name 이므로 (name ,phone) 이 됩니다.
        nextState[e.target.name] = e.target.value;
        this.setState(nextState);
    }

    // 파라미터는 비어있음 >> Contact.js 에서 handleCreate 메소드를 여기로 넘겨오기
    // 버튼이 클릭되면서 Contact.js의 handleCreate 메소드가 발동되고,
    // 발동되면서 해당 내용이 Contact.js의 contactData에 추가되는 것.
    handleClick() {
        const contact = {
            name: this.state.name,
            phone: this.state.phone
        };

        this.props.onCreate(contact);
        this.setState({
            name: "",
            phone: ""
        })
    }


    render() {
        return (
            <div>
                <h2>Create Contact</h2>
                <p>
                    <input type="text"
                           name="name"
                           placeholder="name"
                           value={this.state.name}
                           onChange={this.handleChange}/>
                </p>
                <p>
                    <input type="text"
                           name="phone"
                           placeholder="phone"
                           value={this.state.phone}
                           onChange={this.handleChange}/>
                </p>
                <button onClick={this.handleClick}>Create</button>
            </div>
        )
    }
}


ContactCreate.propTypes = {
    onCreate: propTypes.func
};

ContactCreate.defaultProps = {
    onCreate: () => {
        console.error("onCreate Not defined")
    }
};