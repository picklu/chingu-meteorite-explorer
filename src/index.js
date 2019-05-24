import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

const hello = <h1>Hello, World!</h1>;

ReactDOM.render(<App children={hello} />, document.getElementById('container'));
