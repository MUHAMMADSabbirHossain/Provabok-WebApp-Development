import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div> */}
      < h1 className='text-9xl font-bold text-center'> Provabok</h1 >

      <div className='text-center'>
        <a href='https://github.com/provabok/Provabok-WebApp-Development'>Provabok AndroidApp GitHub</a>
        <br />
        <a href='https://github.com/provabok/Provabok-WebApp-Development'>Provabok WebApp GitHub</a>
        <br />
        <a href='https://github.com/provabok/Provabok-WebApp-Development'>Provabok ServerApp GitHub</a>
      </div>

      <div className="card text-center">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs text-center">
        Click <strong>GitHub</strong> for contribute Open Source Project with us.
      </p>
    </>
  )
}

export default App
