import React from 'react';
import ContactInfo from './ContactInfo';
import ContactDetails from './ContactDetails';
import update from 'react-addons-update';


export default class Contact extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            keyword: "", // input name ="keyword" 여기서 입력 하는 내용을 (인풋에 쓰는 값 >> state에 값 을 넣기 위함 )
            // react-loader >> component가 수정되어서 reloading 될 때 state를 파괴하지 않고 유지 시켜줌
            // 부작용 : react한 loader는 component가 수정 되어서 reloading 될 때
            // constructor 실행 하지 않음 .
            selectedKey : "",
            contactData: [{
                name: 'aspect',
                phone: '000-0000-0001'
            },
                {
                    name: 'browny',
                    phone: '000-0000-0002'
                },
                {
                    name: 'cerkein',
                    phone: '000-0000-0003'
                },
                {
                    name: 'dramatic',
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
        this.handleClick = this.handleClick.bind(this);
        // 함수 사용 시 바인딩은 필수
        this.handleCreate = this.handleCreate.bind(this);
        // 데이터 추가
        this.handleRemove = this.handleRemove.bind(this);
        // 데이터 제거
        this.handleEdit = this.handleEdit.bind(this);
        // 데이터 수정
    }


    handleChange(e) {
        // e >> event 객체
        this.setState({
            keyword: e.target.value
        });

    }

    handleClick(key){
        this.setState({
            selectedKey : key
        });

        console.log(key);
    }

    handleCreate(contact){
        this.setState({
            contactData : update(this.state.contactData,
                {
                    $push : [contact]
                })
        })
    }
    // parameter 없어도 됨 >> selectedKey 삭제할 때 쓸 예정
    handleRemove(){
        this.setState({
            contactData : update(this.state.contactData,
                {
                    //배열의 배열을 전달해줘야 함!
                    $splice: [[this.state.selectedKey,1]]
                }),
            selectedKey : -1 // 무효화
        })
    }

    // 이름, 전화번호 변경
    handleEdit(name,phone){
        this.setState({
            contactData : update(this.state.contactData,
                {
                    // 선택된 키의 인덱스 값의 아이템을 수정하겠다.
                    [this.state.selectedKey] : {
                        name : {$set : name},
                        phone : {$set : phone}
                    }
                })
        })
    }


    render() {
        const mapToComponent = (data) =>{
            data.sort((a,b) => { return a.name > b.name;});
            data = data.filter((contact2) => {
                return contact2.name.toLowerCase().indexOf(this.state.keyword) > -1;
            });
            return data.map((contact,i) => {
                return (<ContactInfo
                                contact = {contact}
                                key = {i}
                                onClick={()=> this.handleClick(i)}/>);
            });
        };

        return (
            <div>
                <h1>Contacts</h1>
                <input
                    name="keyword"
                    placeholder="Search"
                    value={this.state.keyword}
                    onChange={this.handleChange}
                    // onChange는 자바스크립트 함수! (값이 변화할 때 호출되는 메소드)

                />
                <div>{mapToComponent(this.state.contactData)}</div>
                <ContactDetails
                    isSelected = {this.state.selectedKey != -1}
                    contact = {this.state.contactData[this.state.selectedKey]} />
            </div>
        );
    }
}