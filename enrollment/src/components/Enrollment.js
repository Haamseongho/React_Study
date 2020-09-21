import React from 'react';
import update from 'react-addons-update';
import ComponentCss from './css/Component.css';
import EnrollmentInfo from './EnrollmentInfo';
import EnrollmentCreate from './EnrollmentCreate';
import EnrollmentDetails from './EnrollmentDetails';

export default class Enrollment extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            enrollmentData: [{
                name: "이름",
                phone: "전화번호",
                stuId: "학번"
            }],
            keyword: "",
            selectedKey: "",

        };
        this.handleChange = this.handleChange.bind(this);
        this.handleCreate = this.handleCreate.bind(this);
        this.handleEdit = this.handleEdit.bind(this);
        this.handleRemove = this.handleRemove.bind(this);
    }

    handleChange(e) {
        this.setState({
            keyword: e.target.value
        })
    }

    // 이벤트 발생이 아니라 정렬한 배열값의 키 값을 selelctedKey로 줄 예정
    handleClick(key) {
        this.setState({
            selectedKey: key
        })
    }

    // 출석부 내용 추가
    handleCreate(enrollment) {
        this.setState({
            enrollmentData: update(this.state.enrollmentData,
                {
                    $push: [enrollment]
                })
        })
    }

    handleEdit(name, phone, stuId) {
        this.setState({
            enrollmentData: update(this.state.enrollmentData,
                {
                    [this.state.selectedKey]: {
                        // 선택한 리스트에 대한 이름 , 번호 , 학번 바꾸기
                        name: {$set: name},
                        phone: {$set: phone},
                        stuId: {$set: stuId}
                    }
                })
        })
    }

    handleRemove() {
        if (this.state.selectedKey < 0) {
            return; // 0보다 작으면 아무것도 선택 안한 것
        }
        this.setState({
            enrollmentData: update(this.state.enrollmentData,
                {
                    $splice: [
                        [this.state.selectedKey, 1]
                    ]
                }),
            selectedKey: -1 // 무효화
        })
    }

    render() {
        const mapToComponent = (data) => {
            data.sort((a, b) => {
                return a.name > b.name;
            });
            data.filter((enrollment) => {
                return enrollment.name.toLowerCase().indexOf(this.state.keyword) > -1;
            });
            return data.map((enrollment, i) => {
                return (<EnrollmentInfo
                    enrollment={enrollment}
                    key={i}
                    onClick={() => this.handleChange(i)}/>)
            });
        };

        return (
            /*
            1. 정렬하기
            2. 정렬한 key 값이 selectedKey로 들어가도록 하기
             */
            // 입력할 틀을 넣어주기
            <div>
                <input
                    name="keyword"
                    placeholder="Search"
                    value={this.state.keyword}
                    onChange={this.handleChange}
                />
                <div>
                    {mapToComponent(this.state.enrollmentData)}
                </div>

                <EnrollmentDetails
                    onEdit={this.handleEdit}
                    isSelected={this.state.selectedKey != -1}
                    onRemove={this.handleRemove}/>

                <EnrollmentCreate onCreate={this.handleCreate}/>
            </div>

        )
    }
}