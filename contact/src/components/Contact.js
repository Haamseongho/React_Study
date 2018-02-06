import React from 'react';
import ContactInfo from './ContactInfo';

export default class Contact extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            keyword: "", // input name ="keyword" 여기서 입력 하는 내용을 (인풋에 쓰는 값 >> state에 값 을 넣기 위함 )
            // react-loader >> component가 수정되어서 reloading 될 때 state를 파괴하지 않고 유지 시켜줌
            // 부작용 : react한 loader는 component가 수정 되어서 reloading 될 때
            // constructor 실행 하지 않음 .
            contactData: [{
                name: 'A',
                phone: '000-0000-0001'
            },
                {
                    name: 'B',
                    phone: '000-0000-0002'
                },
                {
                    name: 'C',
                    phone: '000-0000-0003'
                },
                {
                    name: 'D',
                    phone: '000-0000-0004'
                }]
        };
        console.log("aa");
        console.log("aa");
        // 콘솔 찍은 거 이거 constructor는 실행되지 않기 때문에
        // 수정되어도 reloading 작업할 때에 찍히지 않는다.
        // refresh 해줘야함!!

        this.handleChange = this.handleChange.bind(this);
        // 바인딩은 필수로 해주기 !!
    }

    handleChange(e){
        // e >> event 객체
        this.setState({
            keyword : e.target.value
        })
    }
    render(){
        

        return (
            <div>
                <h1>Contacts</h1>
                <input
                    name="keyword"
                    placeholder="Search"
                    value = {this.state.keyword}
                    onChange = {this.handleChange}
                    // onChange는 자바스크립트 함수! (값이 변화할 때 호출되는 메소드)

                />
                <div>{mapToComponent(this.state.contactData)}</div>
            </div>
        );
    }
}