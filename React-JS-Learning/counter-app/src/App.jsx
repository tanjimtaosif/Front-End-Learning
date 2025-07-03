import { useState, useEffect } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="min-h-screen bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 flex items-center justify-center p-6">
      <div className="bg-white/60 backdrop-blur-md shadow-lg rounded-2xl p-12 w-full max-w-lg space-y-8 text-center">
        <ChildOne />
        <ChildTwo count={count} />
        <ChildThree setCount={setCount} />
        <ChildFour count={count} />
      </div>
    </div>
  )
}

// Heading
function ChildOne() {
  return (
    <h1 className="text-3xl font-bold bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
      Counter App with Prop Drilling
    </h1>
  )
}

// count display
function ChildTwo({ count }) {
  return (
    <div className="text-2xl bg-blue-100 text-blue-800 font-semibold py-4 px-8 rounded-lg">
      Count: <span>{count}</span>
    </div>
  )
}

// button for increment and decrement
function ChildThree({ setCount }) {
  return (
    <div className="flex flex-col gap-5 items-center">
      <button
        onClick={() => setCount(prev => prev + 1)}
        className="bg-indigo-500 hover:bg-green-600 text-white px-8 py-3 rounded-lg text-lg font-medium transition w-48 cursor-pointer"
      >
        Increase
      </button>
      <button
        onClick={() => setCount(prev => prev - 1)}
        className="bg-violet-500 hover:bg-red-600 text-white px-8 py-3 rounded-lg text-lg font-medium transition w-48 cursor-pointer"
      >
        Decrease
      </button>
    </div>
  )
}

// count msg alert after 5 click
function ChildFour({ count }) {
  useEffect(() => {
    if (count > 0 && count % 5 === 0) {
      alert(`You have clicked the button ${count} times!`);
    }
  }, [count]);

  return (
    <p className="text-xl text-gray-700">
      Clicked the button <strong>{count}</strong> times.
    </p>
  )
}

export default App
