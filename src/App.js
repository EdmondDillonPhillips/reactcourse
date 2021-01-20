import React from 'react';
import Counter from './Counter';
import CounterHooks from './CounterHooks';

function App() {
  return (
    <>
      <div>Counter</div>
      <Counter initialCount={0}></Counter>
      <div>Counter Hooks</div>
      <CounterHooks initialCount={0}></CounterHooks>
    </>
  );
}

export default App;
