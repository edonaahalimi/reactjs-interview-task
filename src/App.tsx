import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import FirstPage from './components/firstPage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div>
      <FirstPage />
      </div>
    </>
  )
}

export default App
