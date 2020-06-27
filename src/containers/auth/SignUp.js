import React, { Component } from 'react'

export default class SignUp extends Component {
    render() {
        return (
            <div>
                <form>
                    <p>
                        <input
                            type="text"
                            placeholder="Your name"
                            onChange={this.inputHandler}
                        />
                    </p>
                    <p>
                        <input
                            type="email"
                            placeholder="Your Email"
                            onChange={this.inputHandler}
                        />
                    </p>
                    <p>
                        <input
                            type="password"
                            placeholder="Your Password"
                            onChange={this.inputHandler}
                        />
                    </p>
                    <button>Sign Up</button>
                </form>
            </div>
        )
    }
}
