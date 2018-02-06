## 주소록 검색 기능 구현 


### sort 기능 
: 배열 요소 내의 데이터들을 오름차순 또는 내림차순으로 정렬하여 뿌려준다.

## 단어 배열 

> var fruits = ['apple','banana','cherry'];

다음과 같은 글자로 되어 있는 배열 같은 경우는 unicode로 비교하여 정렬하게 됩니다.

<br />

##### 오름 차순 : 배열이름.sort();
##### 내림 차순 : 배열이름.sort();

```

	fruits.sort(); 

	결과 : [apple,banana,cherry]

```

```

	fruits.reverse();
	
	결과 : [cherry,banana,apple]


```

## 숫자 배열

> var numbers = [1,2,3,4,5];

다음과 같이 숫자로 되어 있는 배열은 sort의 인자로 callback함수를 주어서 정렬해야한다.

```

	(es5) 
	function sortingNumbers1(a,b){
		return a-b;
	}
	
	numbers.sort(sortingNumbers1); 
	오름차순 결과로 출력

	(es5)
	function sortingNumbers2(a,b){
		return (a-b) * -1;
	}
	
	numbers.sort(sortingNumbers2); 
	내림차순 결과로 출력 


	// a-b > 0 이면 1 반환
	// a-b < 0 이면 -1 반환
	// a-b = 0 이면 0 반환 

	(es6) 
	var sortingNumbers1 = (a,b) => {
		return (a-b);
	}
	
	var sortingNumbers2 = (a,b) => {
		return (a-b) * -1;
	}


```


## Object 정렬

> var objectArray = [ { name : 'haams' , age : 27 } , { ~~ : ' ~~ ' , ~~ : ~~ } , ... ] ; 

다음과 같이 객체로 정해진 배열일 경우 각 요소별로 접근할 수 있다.

```

	objectArray.sort(function(a,b){ return (a.name - b.name) });

	앞 객체의 name 값과 뒤 객체의 name 값을 비교해서 

	1이 반환될 경우 오름차순으로 진행 

	-1이 반환될 경우 내림차순으로 진행 



```

<hr />

### filter 기능 
: 기존 배열 요소를 callback 함수를 통해서 필요 요소들만 뽑아
새로운 배열을 만든다.

```

	(es6)
	var morethan10 = (data) => {
		return data > 10;
	}
	
	var numbers = [1,2,8,12,34,75];
	numbers.filter(morethan10);

	[결과]
	: [12,34,75]


```

기존 numbers라는 배열에 filter 기능을 부착하여 콜백 함수인 morethan10을 추가해줌으로써 10 이상의 값만을 뽑아 새로운 배열을 
만들어 반환하게 된다.


<hr />

# 전체 코드 


```


		
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
        const mapToComponent = (data) => {
            data.sort(); // 입력 받는 걸 오름차순으로 바꾸기!!
            data = data.filter( (contact) => {
                return contact.name.toLowerCase()
                    .indexOf(this.state.keyword) > -1 ;
            });
            return data.map((contact,i) => {
                return (<ContactInfo contact = {contact} key ={i} />);
            });
        };

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



```

렌더링 하는 부분에서 input 값을 넣어준다.

input 의 name은 keyword이고 그 안에 들어갈 값 value는 state값으로 넘어가도록 한다.

(유동적으로 변화하기 위함)

state 값이므로 constructor 부분에서 설정해준다.

state 값 keyword를 constructor에 다음과 같이 선언해준다.

```

	 constructor(props) {
        super(props);
        this.state = {
            keyword: "", 
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


```

keyword 값은 내용이 입력될 때마다 바껴야 하기 때문에 
렌더링 하는 부분에서는 onChange라는 자바스크립트 함수를 사용하여 변화에 대응한다.

또한 변화 시키는 함수를 따로 만들어줘야하며 state 특성상 constructor에서 값 렌더링 이 후 (초기 설정)
바인딩 해준다.


```

	handleChange(e){
        // e >> event 객체
        this.setState({
            keyword : e.target.value
        })
    }


```

다음 바뀌는 내용은 JSX문법에 의해 return 되는 부분에 입력을 해준다.

```


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


```

> onChange = { this.handleChange }  



<br />

값을 반환하는 mapToComponent 함수 부분은 다음과 같이 렌더링해준다.

sort , filter 적용 (검색 기능)

<br />

```

	  const mapToComponent = (data) => {
            data.sort(); // 입력 받는 걸 오름차순으로 바꾸기!!
            data = data.filter( (contact) => {
                return contact.name.toLowerCase()
                    .indexOf(this.state.keyword) > -1 ;
            });
            return data.map((contact,i) => {
                return (<ContactInfo contact = {contact} key ={i} />);
            });
        };


```

mapToComponent 함수의 인자로 contactData가 들어갈 것이다.

contactData는 앞서 object형태로 만든 배열 형식이다.

이 값을 우선 오름차순으로 바꿔준다.

그리고 들어갈 값은 filter를 통해서 받는데,

입력 받은 값을 contact라 하면 받는 내용은 contactData에 들어갈 값이기 때문에 , contact.name.~~~ 와 같은 진행방식이 가능한 것이다.

contact.name.toLowerCase()로 우선 입력받은 것을 소문자로 바꾼뒤, indexOf(this.state.keyword) 를 통해서 입력 받아서 바뀌는
state 값을 indexOf함수를 통해 찾는다. 

찾아낸 인덱스가 -1보다 크다고 한 경우는 처음부터 계속 검색한다는 의미가 되고, 

다음과 같이 진행할 경우 검색 기능이 되는 주소록이 완성되게 된다.

---

### Reference 


<a href="http://slides.com/minjunkim-1/deck#/14">
http://slides.com/minjunkim-1/deck#/14</a>

