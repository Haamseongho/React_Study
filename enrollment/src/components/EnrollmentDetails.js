import React from 'react';
import propTypes from 'prop-types';

export default class EnrollmentDetails extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isEdit: false,
            name: "",
            phone: "",
            stuId: ""
        };
        this.handleToggle = this.handleToggle.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleEdit = this.handleEdit.bind(this);
        this.handleKeyPress = this.handleKeyPress.bind(this);
    }

    handleToggle() {
        // false
        if (!this.state.isEdit) {
            this.setState({
                name: this.props.enrollment.name,
                phone: this.props.enrollment.phone,
                stuId: this.props.enrollment.stuId
            });
        } else {
            this.handleEdit();
        }

        // handleToggle 호출 시에 isEdit의 boolean 값은 변경
        // handleToggle이 false 일 경우 그냥 그 전에 있던거 보여주는 거고 true 이면 handleEdit으로 넘어감
        // EnrollmentDetails의 props로 사용
        this.setState({
            isEdit: !this.state.isEdit
        });
    }

    handleChange(e) {
        let nextState = {}; // 여러개 인풋 처리 가능
        // e.target.name --> 여기 name 은 input 데이터의 name 이므로 (name ,phone) 이 됩니다.
        console.log(e.target.name + "/" + e.target.value);
        nextState[e.target.name] = e.target.value;
        this.setState(nextState);
    }

    // 이름 / 번호 / 학번 onEdit으로 바꿔주기 >> EnrollmentDetails의 props 값으로
    // onEdit 함수를 받는다 >> 이거 다른 함수로 적용해서 넣을 예정
    handleEdit() {
        this.props.onEdit(this.state.name, this.state.phone, this.state.stuId);
    }

    handleKeyPress(e) {
        if (e.charCode === 13) {
            this.handleToggle();
        }
    }


    render() {
        const details = (
            <div>
                <p>{this.props.enrollment.name}</p>
                <p>{this.props.enrollment.phone}</p>
                <p>{this.props.enrollment.stuId}</p>
            </div>
        );

        const blank = (<div>선택하지 않았습니다.</div>);

        const edit = (
            <div>
                <p>
                    <input type="text"
                           name="name"
                           value={this.state.name}
                           onChange={this.handleChange}
                           onKeyPress={this.handleKeyPress}
                           placeholder="name"
                    />
                </p>
                <p>
                    <input type="text"
                           name="phone"
                           value={this.state.phone}
                           onChange={this.handleChange}
                           onKeyPress={this.handleKeyPress}
                           placeholder="phone_number"
                    />
                </p>
                <p>
                    <input type="text"
                           name="stuId"
                           value={this.state.stuId}
                           onChange={this.handleChange}
                           onKeyPress={this.handleKeyPress}
                           placeholder="student Id"
                    />
                </p>
            </div>
        );

        const view = this.state.isEdit ? edit : details;

        return (
            <div>
                {this.props.isSelected ? view : blank}
                <p>
                    <button onClick={this.handleToggle}>{this.state.isEdit ? ("Ok") : "EditMode"}</button>
                    <button onClick={this.props.onRemove}> Remove </button>
                </p>
            </div>
        )
    }
}

EnrollmentDetails.defaultProps = {
    enrollment: {
        name: "",
        phone: "",
        stuId: ""
    },
    handleChange: () => {
        console.error("handleChange() error");
    },
    handleEdit: () => {
        console.error("handleEdit() error");
    }
};
EnrollmentDetails.propTypes = {
    enrollment: propTypes.object,
    handleEdit: propTypes.func,
    handleChange: propTypes.func
};