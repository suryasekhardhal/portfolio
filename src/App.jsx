import { useState } from 'react'
import AppRoute from './routes/AppRoute'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h2>My Portfolio</h2>
    <AppRoute />
    </>
  )
}

export default App
