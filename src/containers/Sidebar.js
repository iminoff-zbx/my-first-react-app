import React, { Component } from 'react';
import Link from '../components/Link'

class Sidebar extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            number: 0,
            data: [],
            role: {
                admin: true,
                isNew: false
            }
        }
    }

    clickHandler = () => {
        console.log('Clicked');
        this.setState({number: this.state.number + 1}, () => this.alertHandler());
    }

    alertHandler = () => {
        const {number} = this.state;
        if(number === 5) {
            alert('Number is 5');
        }
    }

    clearHandler = () => {
        this.setState({number: 0});
    }

    render() {
        console.log(this.state);
        const {title, data} = this.props;
        const {number} = this.state;
        return (
            <div>
                <h1>Today.uz</h1>
                <p>{title}, {data.name}</p>
                <button onClick={this.clickHandler}>Click</button>
                <hr />
                <Link data={{url: '/my-link', title: 'Alitech', isActive: true}} />
                <section>
                    <h1>Number: {number}</h1>
                    <button onClick={this.clickHandler}>Update number</button>
                    <button onClick={this.clearHandler}>Clear</button>
                </section>
            </div>
            
        )
    }
}

export default Sidebar;