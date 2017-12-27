# Map()
- 파라미터로 전달된 함수를 통하여 배열 내의 각 요소를 처리해서 나온 결과로 새로운 배열을 생성

---

arr.map(callback,[thisArg]);

### callback : 새로운 배열 요소를 생성하는 함수 
#### 사용 요소 

- current-value : 현재 처리되고 있는 요소
- index : 현재 처리되고 있는 index 값
- array : 메소드가 불려진 배열
- thisArg : (Option) callback 함수에서 사용할 this 값을 설정 


### es6문법

> =>   (Arrow 함수)

var numbers = [1,2,3,4,5];

var processed = numbers.map(num) => { return num*num; } 

'=>' 이 부분이 콜백함수로 적용된다. 

 
--- 

### es6 문법에서 동일한 구조 

> var one = a => console.log(a) ; 

```

	var one = function(a) { 
		return console.log(a);
    }


```


## Component Mapping

### Contact 클래스 

```







	class Contact extends React.Component {

    	constructor(props) {
        	super(props);
        	this.state = {
            	contactData: [
                	{ name: 'Abet', phone: '010-0000-0001' },
                	{ name: 'Betty', phone: '010-0000-0002' },
                	{ name: 'Charlie', phone: '010-0000-0003' },
                	{ name: 'David', phone: '010-0000-0004' }
            	]
        	}

    	}
    	render() {

        	const mapToComponent = (data) => {
            	return data.map((contact, i) => {
                	return (<ContactInfo contact={contact} key={i}/>);
            	});
        	};


        	return (
            	<div>
                	{ mapToComponent(this.state.contactData) }
            	</div>
        	);
    	}
	}





```

## 설명 


Contact 클래스에서는 state함수를 사용하기 위하여 constructor를 사용하였습니다.

state의 값으로 contactData를 주었으며 이는 배열 형태로 나타내는 변수입니다.

contactData 내부에는 {name : '~~' , phone ; '~~'} 형태의 key - value 값의 json 형태의 값으로 들어가 있습니다.

이 함수에서 rendering 할 때 mapToComponent라는 함수를 만듭니다. es6 문법으로 Arrow 함수를 사용하여 다음과 같이 함수를 만들어줍니다. 

인자로 들어간 data는 map함수를 만나 표현되었는데, map함수의 특징 중 callback으로 들어가는 내용은 current-value , index , array 이렇게 3가지가 있었습니다.

따라서 첫 번째 인자인 contact는 배열 형태로 현재 처리되는 값이며 i는 index가 됩니다.

즉 data의 배열 값을 contact로 받아드린 것입니다. (이게 핵심)

이 후에 ContactInfo contact에서는 props value로 contact의 이름을 갖고 contact 배열을 뿌려줍니다.

key는 인덱싱으로 배열의 인덱싱 , 하나의 구분자 역할을 합니다.

Contact클래스가 return 할 때에는 mapToComponent 함수를 호출하면서 인자로는 
contactData값을 호출합니다. (앞서 {name: '~~' , phone : '~~'} 이렇게 값을 갖는 배열 형태가 호출되는 것 )

그 결과 본 배열 형태는 mapToComponent의 인자인 data로 들어가고 그 배열의 값을 
map 함수의 첫 번째 인자인 contact로 받아드리고 인덱스 값을 i로 받아드린 것이다.


```

		class ContactInfo extends React.Component {
    		render() {
        		return (
            		<div>{this.props.contact.name} {this.props.contact.phone}</div>
        		)
    		}
		}



```

ContactInfo 클래스에서는 리턴 값으로 {this.props.contact.name} {this.props.contact.phone} 을 보냅니다.

이것은 mapToComponent 함수의 리턴 값으로 <ContactInfo contact = {contact} key ={i} />

이 부분에서 결론이 나온다.

ContactInfo의 props name으로 contact를 주었고 이를 ContactInfo 클래스에서 호출하게 된 것이다. 

ContactInfo의 props 값으로 {contact}를 넘겨주었고 이는 contactData가 되는 것을 알 수 있다.

다시 설명하자면 mapToComponent 함수를 호출할 때에 contactData값을 state 값으로 해서 호출하였고 , 이는 mapToComponent의 함수의 인자인 data로 들어가게 된다.

data에는 현재 contactData라는 배열을 가지고 있다. 여기서 map함수를 이용하여 배열 내의 각 요소를 처리하여 나온 결과로 새로운 배열을 만들어 낸다.

{name:'Abet' , phone:'010-0000-0001'} 이 부분이 배열요소이고 i는 contactData 배열의 인덱스가 됩니다. 

결과적으로 배열 요소와 인덱싱 작업을 거쳐서 {contact} 라는 배열로 전달하게 됩니다.


```

		
	class App extends React.Component {

    	render() {
        	return (
        	    <Contact/>
        	);
    	}	
	};

	ReactDOM.render(
    	<App></App>,
    	document.getElementById("root")
	);



```

App 클래스에선 Contact클래스를 렌더링하게 되고 Contact클래스에서의 렌더링에선 
ContactInfo 클래스를 호출하게 됩니다.

ContactInfo 클래스에서의 렌더링은 Contact의 값을 호출하는 것이고 그 값은 
contactData가 됩니다.

**map함수를 통해서 배열 형태로 정리**


