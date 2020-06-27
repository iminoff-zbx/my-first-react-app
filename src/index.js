import React from 'react';
import ReactDOM from 'react-dom';
// import Sidebar from './containers/Sidebar';
// import SignUp from './containers/SignUp';
import Auth from './containers/auth';

ReactDOM.render(
    <div>
        {/* <Sidebar 
            title="Class Component" 
            data={{ name: 'Alisher', age: 28 }}  
        /> */}
        {/* <SignUp /> */}
        <Auth />
    </div>
    , document.getElementById('root'));