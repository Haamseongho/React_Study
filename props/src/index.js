import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import {ReactTest} from "./components/App";

const rootElement = document.getElementById('root');
ReactDOM.render(<ReactTest propName={"seongho"}>12월 크리스마스!</ReactTest>, rootElement);


ReactDOM.render(<App/>, document.getElementById("test"));
ReactDOM.render(<App value={0}></App>, Document.getElement("test2"));
ReactDOM.render(<App secondValue={2}>기본 값은 1인데 설정은 2로함</App>, Document.getElement("test3"));
ReactDOM.render(<App thirdValue={4}>기본 값은 2인데 설정은 4로함</App>, Document.getElement("test4"));