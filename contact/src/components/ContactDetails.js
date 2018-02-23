import React from 'react';
import propTypes from 'prop-types';

export default class ContactDetails extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isEdit: false, // 초기 edit mode가 아니므로 false
            name: '',
            phone: ''
        };
        this.handleToggle = this.handleToggle.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleEdit = this.handleEdit.bind(this);
        this.handleKeyPress = this.handleKeyPress.bind(this);
    }


    handleToggle() {
        if (!this.state.isEdit) {
            this.setState({
                name: this.props.contact.name,
                phone: this.props.contact.phone
            });
        } else {
            this.handleEdit();
        }
        // setState >> 비동기 // 실행하기 전에 먼저 수행됨
        this.setState({
            isEdit: !this.state.isEdit
        });
        console.log(this.state.idEdit);
    }

    handleChange(e) {
        let nextState = {}; // 여러개 인풋 처리 가능
        // e.target.name --> 여기 name 은 input 데이터의 name 이므로 (name ,phone) 이 됩니다.
        console.log(e.target.name+"/"+e.target.value);
        nextState[e.target.name] = e.target.value;
        this.setState(nextState);
    }

    handleEdit() {
        this.props.onEdit(this.state.name, this.state.phone);
    }

    handleKeyPress(e) {
        if (e.charCode === 13) {
            this.handleToggle();
        }
    }


    render() {
        const details = (
            <div>
                <p>{this.props.contact.name}</p>
                <p>{this.props.contact.phone}</p>
            </div>);
        const blank = (<div>Not Selected</div>);
        // true >> 비워준 것을 보여줌 , false 면 details 출력 (기존꺼)

        const edit = (
            <div>
                <p>
                    <input type="text"
                           name="name"
                           placeholder="name"
                           value={this.state.name}
                           onChange={this.handleChange}
                           onKeyPress={this.handleKeyPress}/>
                </p>
                <p>
                    <input type="text"
                           name="phone"
                           placeholder="phone"
                           value={this.state.phone}
                           onChange={this.handleChange}
                           onKeyPress={this.handleKeyPress}/>
                </p>
            </div>
        );

        const view = this.state.isEdit ? edit : details;

        return (
            <div>
                {this.props.isSelected ? view : blank}
                <p>
                    <button onClick={this.props.onRemove}>Remove</button>
                    <button onClick={this.handleToggle}>{this.state.isEdit ? ("Ok") : "EditMode"}</button>
                </p>
            </div>
        );


    }
}

ContactDetails.defaultProps = {
    contact: {
        name: '',
        phone: ''
    },
    onRemove: () => {
        console.error("remove error");
    },
    handleEdit: () => {
        console.error("edit error");
    }
};

ContactDetails.propTypes = {
    contact: propTypes.object,
    onRemove: propTypes.func,
    handleEdit: propTypes.func
};