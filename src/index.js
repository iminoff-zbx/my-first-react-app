import React from 'react';
import ReactDOM from 'react-dom';
import Sidebar from './containers/Sidebar';
import SignUp from './containers/SignUp';

ReactDOM.render(
    <div>
        <Sidebar 
            title="Class Component" 
            data={{ name: 'Alisher', age: 28 }}  
        />
        <SignUp />
    </div>
    , document.getElementById('root'));