import React, { Component } from 'react';
import { Link } from "react-router-dom";

export default class Navbar extends Component {
    render() {
        return (
            <header>
                <nav>
                <Link to="/">Logo</Link>
                    <ul>
                        <li>
                            <Link to="/sign-in">Log in</Link>
                        </li>
                        <li>
                            <Link to="/sign-up">Sign Up</Link>
                        </li>
                    </ul>
                </nav>
            </header>
        )
    }
}
