import React from 'react';
import ReactDOM from 'react-dom';
import Sidebar from './containers/Sidebar';

ReactDOM.render(
    <Sidebar title="Class Component" data={{name: 'Alisher', age: 28}}/>
    , document.getElementById('root'));