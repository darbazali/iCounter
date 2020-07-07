import React from 'react';
import { Provider, useSelector, useDispatch } from 'react-redux';
import store from './store';

// Acction Names
export const INCREMENT = 'INCREMENT', DECREMENT = 'DECREMENT', RESET = 'RESET';


function CounterApp() {
  // counter state
  const count = useSelector(state => state)

  // dispatcher
  const dispatch = useDispatch()


  function increment() {
    dispatch({
      type: INCREMENT
    })
  }

  function decrement() {
    dispatch({
      type: DECREMENT
    })
  }

  function reset() {
    dispatch({
      type:RESET
    })
  }

  return (
    <div id="counter">
      <p>Count your moments</p>
      <h1>{count}</h1>
      <button className="btn" onClick={decrement}>-</button>
      <button className="btn" onClick={reset}>RESET</button>
      <button className="btn" onClick={increment}>+</button>
    </div>
  )
}



export default function Counter() {
  return (
    <Provider store={store}>
      <CounterApp />
    </Provider>
  )
}
