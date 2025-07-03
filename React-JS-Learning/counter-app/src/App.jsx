import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center px-4 text-center">
      <div className="flex gap-6 mb-6">
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="h-16 hover:scale-110 transition-transform duration-200" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="h-16 hover:scale-110 transition-transform duration-200" alt="React logo" />
        </a>
      </div>

      <h1 className="font-bold text-blue-700 mb-4">Counter App</h1>

      <div className="bg-white shadow-lg rounded-xl p-6 w-full max-w-sm">
        <button
          onClick={() => setCount((count) => count + 1)}
          className="bg-blue-600 hover:bg-blue-700 text-black font-semibold py-2 px-4 rounded transition-all duration-200 w-full"
        >
          count is {count}
        </button>
        <p className="text-sm text-gray-600 mt-3">
          Edit <code className="bg-gray-200 px-1 py-0.5 rounded">src/App.jsx</code> and save to test HMR
        </p>
      </div>

      <p className="mt-6 text-gray-500 text-sm">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  )
}

export default App
