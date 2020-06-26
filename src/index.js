import React from 'react';
import ReactDOM from 'react-dom';

const data = <h1>Hello World</h1>
const data1 = <h1>Hello World1</h1>

ReactDOM.render(
    <section>
        {data}
        {data1}
    </section>
    , document.getElementById('root'));