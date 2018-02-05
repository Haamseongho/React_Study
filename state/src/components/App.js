import React from 'react';

// 초기값 반드시 설정하기
class Counter extends React.Component {
    constructor(props) {// constructor의 인자는 props고 이는 Counter라는 클래스가 만들어 질 때 전달 받을 props입니다.
        super(props); // 상속받은 클래스 React.Component, 즉 Parent의 생성자의 메소드를 먼저 실행
        // 이렇게 먼저 해줘야 this로 접근 가능.
        this.state = {
            value: 0
        },
            this.handleClick = this.handleClick.bind(this);
    }

    // this.setState 이 부분에서 this 가 무엇을 가르키는지 모른다. 그러므로 this가 무엇인지 가르켜줘야 하는데
    // 이 부분을 onClick 부분에 this.handleClick부분에 바인딩 시켜준다.
    // this.handleClick.bind(this) 를 통하여 현재 이 this가 위에서 선언한 this와 같다는 것을 바인딩 해주고
    // 작업하기 때문에 handleClick에서의 this는 외부에서 설정한 this 와 동일해지고
    // 그에 따라 State를 재 설정 가능한 것입니다.
    // onClick 이벤트에서 바인딩 할 수 있지만 이를 constructor에서 해주면 좀 더 깔끔합니다.


    handleClick() { // this.state.value = this.state.value + 1 >> 이런 식으로는 작업하지 말 것 (강제로 바꿔야 하기 때문)
        this.setState({
            value: this.state.value + 1
        });
    }

    render() {
        return (
            <div>
                <h2>{this.state.value}</h2>
                <button onClick={this.handleClick}>누르셈!</button>
            </div>
        )
    }
}


export {Counter};