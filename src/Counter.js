import React, { Component } from 'react'

export default class Counter extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             count: 0
        }

        this.increment = this.increment.bind(this)
        this.decrement = this.decrement.bind(this)
        this.reset = this.reset.bind(this)

    }

    increment() {
        this.setState({ count: this.state.count + 1})
    }

    decrement() {
        this.setState({ count: this.state.count - 1})
    }

    reset() {
        this.setState({ count: 0})
    }
    
    render() {
        return (
            <div>
                <h3>Count your Moments</h3>
                <h1>{this.state.count}</h1>
                <button className="btn" onClick={this.increment}>+</button>
                <button className="btn" onClick={this.reset}>RESET</button>
                <button className="btn" onClick={this.decrement}>-</button>
            </div>
        )
    }
}
