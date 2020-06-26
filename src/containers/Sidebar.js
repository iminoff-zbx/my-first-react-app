import React, { Component } from 'react';
import Link from '../components/Link'

class Sidebar extends Component {

    clickHandler = () => {
        alert('Clicking');
    }

    render() {
        const {title, data} = this.props;
        return (
            <div>
                <h1>Today.uz</h1>
                <p>{title}, {data.name}</p>
                <button onClick={this.clickHandler}>Click</button>
                <hr />
                <Link data={{url: '/my-link', title: 'Alitech', isActive: true}} />
            </div>
            
        )
    }
}

export default Sidebar;