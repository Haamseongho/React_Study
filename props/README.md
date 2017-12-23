# React_Study
개인적으로 React.js 공부하고 정리(TIL)


## props

- 컴포넌트 내부에 변화하지 않는 Data에 사용한다.
- JSX 내부에 { this.props._____ } 로 설정한다.
- { this.props.children } : 기본적으로 갖는 props로 이미 정의가 되어 있고 <Cpnt> ~~ </Cpnt> 에서의 '~~' 값에 속한다.
> 예시 

```

   class App extends React.Component{
      render(){
         return(
            <div>
               <div>{this.props.name}</div>
               <div>{this.props.children}</div>
            </div>
         );
      }
   }


   export { App } ; or export default App;

```

이와 같이 React 컴포넌트 역할을 하는 App 클래스에서 props로 변수 (키 = name)를 설정하고 고정 값인 children을 불러온다.

React에서 설정한 값을 읽는 ReactDOM 객체에서 해당 설정 값을 정의해준다.

```

   import React from 'react'
   import ReactDOM from 'react-dom'
   import App from '상대경로 (App 클래스가 있는 곳)'
   
   ReactDOM.render(<App name="haams"> seongho </App>, document.getElementById("view id"));


```

지금 상황은 App 클래스에서 App을 export한 상황이고 이를 App자체로 import한 상황이다.

여기서 React값을 읽는 ReactDOM에서 render 함수를 불러와서 데이터를 읽어오는데, App 클래스 자체를 읽고자 아래와 같은 태그를 사용한다. (Customizing) 

``` 


   <App> </App> 


```

여기서 props의 name 값을 App 클래스의 name으로 하여 불러주면 haams 라는 

해당 값이 들어가게 되고 태그 사이에 seongho는 
이미 fix되어 정의된 this.props.children의 값으로 들어가게 된다.

해당 내용은 ReactDOM 에서만 사용되는 것이 아니라 다른 클래스에서도 사용 할 수 있다.

```

   class Bap extends React.Component{
      render(){
         return(
            <div><App name="haams"> seongho </App>
         );
      }
   }
   


```

ReactDOM에서는 Bap클래스를 읽어오면 된다. 그러면 처음의 경우와 같은 결과 값을 도출해 낼 것이다.


```

   ReactDOM.render(<Bap></Bap>,document.getElementById("View id")); 


```


---

## props의 default값과 타입 정의 

<br />

#### 기본 값을 정의하는 것은 쉽다.

### <사용법>

> 클래스 이름.defaultProps = { 설정값 : ___ } ;

예시 

``` 

   class App extends React.Component{
      render(){
         return(
            <div>
               <div>{this.props.firstValue}</div>
               <div>{this.props.secondValue}</div>
               <div>{this.props.thirdValue}</div>
            </div>
         )
      }
   }


   App.defaultProps = {
      firstValue : 'abc',
      secondValue : 'def',
      thirdValue : 123
   }

``` 

이와 같이 props의 값을 선언해주고 default 값을 정의해준다.
ReactDOM에서 또는 다른 클래스에서 App 클래스에서의 props 값을
정의할 때 별도의 값을 정의해도 기본 값으로 들어갈 것입니다.


### propTypes 

- props의 value 값으로 들어가는 타입을 설정한다.
- 설정하는 이유는 잘못된 값이 들어갈 경우 에러 메시지를 불러오기 위함이며 유지 보수에 보다 더 도움이 되고자 사용한다.

<br />

### <사용법>

```

   (App이라는 클래스가 위에서 처럼 정의가 되었을 경우)

   App.propTypes = {
      firstValue : React.PropTypes.string.isRequired,
      secondValue : React.PropTypes.string,
      thirdValue : React.PropTypes.number
   }


```

다음과 같이 설정할 수 있으며 읽어보면 어떠한 내용을 담고 있는지 무엇을 나타내려 하는 지 예상하실 수 있을 것입니다.

타입의 종류는 많으나 기본 수준의 개념과 실습 내용이기에 다 담아내지 못한 점이 정말 아쉽습니다.

더 많은 내용은 아래 링크를 통해 참조해주시기 바랍니다.

<hr />

#### Reference

<a href="https://reactjs.org/docs/components-and-props.html"> https://reactjs.org/docs/components-and-props.html </a>
