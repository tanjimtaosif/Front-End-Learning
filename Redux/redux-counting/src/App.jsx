import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from './features/counter/counterSlice';

const App = () => {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div className="h-screen flex flex-col items-center justify-center bg-gray-100 text-gray-800">
      <h1 className="text-4xl font-bold mb-6">Redux Counter</h1>
      <div className="text-6xl mb-6">{count}</div>
      <div className="space-x-4">
        <button
          onClick={() => dispatch(increment())}
          className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded"
        >
          +
        </button>
        <button
          onClick={() => dispatch(decrement())}
          className="bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded"
        >
          -
        </button>
      </div>
    </div>
  );
};

export default App;
