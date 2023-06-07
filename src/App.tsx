import { useState } from 'react'
import linkedInLogo from '/linkedInLogo.png'
import githubLogo from '/githubLogo.png'
import Jumbotron from './components/Jumbotron'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="bg-blue-300">
        <a href="https://github.com/RosalvaMartinez" target="_blank">
          <img src={githubLogo} className="h-16 w-16" alt="github logo" />
        </a>
        <a href="https://www.linkedin.com/in/rosalva-hazel-martinez-a65bb9276/" target="_blank">
          <img src={linkedInLogo} className="h-16 w-16" alt="linkedIn logo" />
        </a>
      </div>
      <h1>Rosalva Hazel Martinez</h1>
      <Jumbotron />
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          give us a like {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
