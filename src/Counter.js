import React, { Component } from "react";
import { createStore } from "redux";
import { connect, Provider } from "react-redux";

/*=====================
  REDUX CODE
=====================*/

// Actions
const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";
const RESET = "RESET";

// Action Creators
const incAction = () => {
  return {
    type: INCREMENT,
  };
};

const decAction = () => {
  return {
    type: DECREMENT,
  };
};

const resetAction = () => {
  return {
    type: RESET,
  };
};

// REDUCER
const counterReducer = (state = 0, action) => {
  switch (action.type) {
    case INCREMENT:
      return state + 1;
    case DECREMENT:
      return state - 1;
    case RESET:
      return (state = 0);
    default:
      return state;
  }
};

const store = createStore(counterReducer);

/*=====================
  REACT CODE
=====================*/

// handle state localy
class Presentational extends Component {
  constructor(props) {
    super(props);

    this.state = {
      
    };

    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
    this.reset = this.reset.bind(this);
  }

  increment() {
    this.props.incrementCount(this.state.count);
  }

  decrement() {
    this.props.decrementCount(this.state.count);
  }

  reset() {
    this.props.resetCount(this.state.count);
  }

  render() {
    return (
      <div>

        <h3>Count your moments</h3>
        <h1>{this.props.count}</h1>
        <button className="btn" onClick={this.increment}>
          +
        </button>
        <button className="btn" onClick={this.reset}>
          Reset
        </button>
        <button className="btn" onClick={this.decrement}>
          -
        </button>

        
      </div>
    );
  }
}

/*=====================
  REACT-REDUX CODE
=====================*/

// map states to props
const mapStateToProps = (state) => {
  return { count: state };
};

// map dispatch to props
const mapDispatchToProps = (dispatch) => {
  return {
    incrementCount: function () {
      dispatch(incAction());
    },

    decrementCount: function () {
      dispatch(decAction());
    },

    resetCount: function () {
      dispatch(resetAction());
    },
  };
};

const Container = connect(mapStateToProps, mapDispatchToProps)(Presentational);

export default class Counter extends Component {
  render() {
    return (
      <Provider store={store}>
        <Container />
      </Provider>
    );
  }
}
