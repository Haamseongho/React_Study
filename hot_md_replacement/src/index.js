import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {App,Test} from './App';
import registerServiceWorker from './registerServiceWorker';


ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(<Test />, document.getElementById('test'));
registerServiceWorker();

if(module.hot){
    module.hot.accept();
}