import { useState } from 'react'
import Form from './components/Form'
import { Effect } from './components/Effect'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Form />
      <Effect />
    </>
  )
}

export default App
