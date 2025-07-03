import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const [info, setInfo] = useState({
    name: '',
    address: '',
    phone: ''
  });

  //pop-up when click 5 times
  useEffect(() => {
    if (count > 0 && count % 5 === 0) {
      alert(`You have clicked ${count} times!`);
    }
  }, [count]);

  //load personal info
  useEffect(() => {
    setTimeout(() => {
      setInfo({
        name: 'Tanjim Mahtab',
        address: 'Dhaka, Bangladesh',
        phone: '+8801646765439'
      });
    }, 1000);
  }, []);

  const style = {
    color: 'white',
    backgroundColor: '#456882'
  }

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>

      <div className='my-info'>
        <h2 style={style}>My Information</h2>
        <p><strong>Name:</strong> {info.name || "Loading..."}</p>
        <p><strong>Address:</strong> {info.address || "Loading..."}</p>
        <p><strong>Phone:</strong> {info.phone || "Loading..."}</p>
      </div>

      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>

      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
