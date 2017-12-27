# React_Study
개인적으로 React.js 공부하고 정리(TIL)


## state

- 유동적인 데이터를 사용할 때 쓴다.
- 초기 값 설저잉 필수다. Component 생성자 메소드인 constructor에서 쓴다.
- this.state = { value : ___ } 로 설정한다.
- ___ 이 부분은 JSX 내부에 {this.state.___} 에서의 ___ 와 같은 부분이다.
- constructor 부분에서는 state와 관련된 값의 정의 뿐 아니라 
메소드(함수) 도 같이 정의하여 바인딩 시킨다. 

```

	this.handleClick = this.handleClick.bind(this);


```

다음과 같이 바인딩을 시켜야 하는 이유는 다음과 같이 바인딩 작업을 해야만 함수에서 설정한 this가 위에 정의한 this와 동일하다고 판단하고 올바르게 구동되기 때문입니다.

- this.setState( { 생성자에서 정의한 값 : (this.state.____) } ) 변경 가능 


### 예제 

``` 

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
                	<button onClick={this.handleClick}>Press Me</button>
            	</div>
        	)
    	}
	}


```

constructor의 파라미터로는 props가 들어간다. 
이는 React.Component가 (Counter 클래스) 객체로 만들어 질 때 props로 데이터를 받기 때문에 해준 것이다.

super(props); 를 그 다음 바로 해주어야 부모 클래스의 생성자를 먼저 수행하고 그 다음 this생성자로 접근할 수 있다.

```

	this.state = {
            value: 0
        },


```

이 부분에서는 JSX 내부에 ** *this.state.value** *
이 부분과 연결됩니다.

state값으로 value를 주었고 여기의 기본 값을 설정하고자 constructor에서 super메소드 이 후에 this.state = {**value**
: " " } 라고 정의한 것입니다. 


그 다음 생성자 내에서 handleClick이라는 함수가 본 클래스에서 사용 되었단 걸 확인하고자 binding 작업을 거치게 되는데 아래와 같이 표현됩니다. 

```

 	this.handleClick = this.handleClick.bind(this);

```

```

	handleClick() { // this.state.value = this.state.value + 1 >> 이런 식으로는 작업하지 말 것 (강제로 바꿔야 하기 때문)
        this.setState({
            value: this.state.value + 1
        });
    }


```

생성자 외부에서는 this.state.value = ~~ 이런 식으로 직접 접근 방법은 옳지 않습니다.

따라서 this.setState 메소드를 사용하는데, 위와 같이 value 값을 변경해줍니다. (앞에 value는 이미 위에서 this.state를 통해서 정의한 부분 ) 

또한 렌더링이 되기 전엔 setState를 사용할 수 없기 때문에
본 handleClick() 메소드는 JSX 내부에서 호출하게 됩니다.

```

	render() {
        return (
            <div>
                <h2>{this.state.value}</h2>
                <button onClick={this.handleClick}>Press Me</button>
            </div>
        )
    }


```

다음과 같이 렌더링을 한 뒤에 JSX 내부에서 onClick 메소드로 불러지게 됩니다. 
렌더링 이 후에 작업한 내용이기에 setState를 사용할 수 있는 것입니다.

```

	render() {
        return (
            <div>
                <h2>{this.state.value}</h2>
                <button onClick={this.handleClick.bind(this)}>Press Me</button>
            </div>
        )
    }


```


앞서 constructor에서 본 함수를 binding 하였기에 onClick 이벤트에서는 함수 호출만 하면 되었으나,

constructor에서 호출하지 않았을 경우 onClick에서 다음과 같이
바인딩을 할 수 있습니다.

그렇지만 전자의 방법을 추천하는 바이며 정리하기도 더 편할 것입니다.

---

## 참조 



### index.js

```

	import React from 'react';
	import ReactDOM from 'react-dom';
	import {Counter} from "./components/App";

	const rootElement = document.getElementById('root');
	ReactDOM.render(<Counter/>, rootElement);


```

### index.html


```


		<!DOCTYPE html>
		<html>

   		<head>
      		<meta charset="UTF-8">
      		<title>React App</title>
   		</head>

   		<body>
      		<div id="root"></div>
      		<div id="test"></div>
      		<div id="test2"></div>
      		<div id="test3"></div>
      		<div id="test4"></div>
      		<script src="/bundle.js"></script>
   		</body>

		</html>




```

## Thanks to



<a href="https://velopert.com/867"> https://velopert.com/867 </a>