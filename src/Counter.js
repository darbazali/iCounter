import React, { Component } from 'react'
import { createStore } from 'redux'
import { connect, Provider } from 'react-redux'

// create actions
const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';
const RESET = 'RESET';

// Action creators
const incAction = () => {
    return {
        type: INCREMENT
    }
}

const decAction = () => {
    return {
        type: DECREMENT
    }
}

const resetAction = () => {
    return {
        type: RESET
    }
}


// Create Reducer
const counterReducer = ( state = 0, action ) => {
    switch (action.type) {
        case INCREMENT:
            return state + 1;
        case DECREMENT:
            return state - 1
        case RESET: return state = 0
    
        default:
            return state;
    }
}


// create store
const store = createStore(counterReducer)






class Presentational extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             
        }

        this.increment = this.increment.bind(this)
        this.decrement = this.decrement.bind(this)
        this.reset = this.reset.bind(this)

    }

    increment() {
        // this.setState({ count: this.state.count + 1})
        this.props.incCount(this.state.count);
    }

    decrement() {
        // this.setState({ count: this.state.count - 1})
        this.props.decCount(this.state.count);
    }

    reset() {
        // this.setState({ count: 0})
        this.props.resetCount(this.state.count)
    }
    
    render() {
        return (
            <div>
                <h3>Count your Moments</h3>
                <h1>{this.props.count}</h1>
                <button className="btn" onClick={this.increment}>+</button>
                <button className="btn" onClick={this.reset}>RESET</button>
                <button className="btn" onClick={this.decrement}>-</button>
            </div>
        )
    }
}


// map states to props

const mapStateToProps = state => { return { count: state}}

// map dispatch to prosp
const mapDispatchToProps = dispatch => {
    return {
        incCount: function() {
            dispatch(incAction)
        },

        decCount: function() {
            dispatch(decAction)
        },

        resetCount: function() {
            dispatch(resetAction)
        }
    }
}


const Container = connect(mapStateToProps, mapDispatchToProps)(Presentational);


export default class Counter extends Component {
    render() {
        return (
            <Provider store={store}>
                <Container />
            </Provider>
        )
    }
}
