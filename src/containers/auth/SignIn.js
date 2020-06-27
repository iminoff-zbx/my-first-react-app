import React, { Component } from 'react'

export default class SignIn extends Component {
    render() {
        return (
            <div>
                 <form>
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
                    <button >Log In</button>
                </form>
            </div>
        )
    }
}
