import { useState } from 'react'
import { Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';

function App() {
  const [user, setUser] = useState(null)

  return (
    <>
      <NavBar  user={user} />
      <h1>Hello, world!</h1>
    </>
  )
}

export default App
