import { useState } from 'react'
import Header from './components/Header/Header'
import './App.css'
import Home from './components/Home/Home'
import Footer from './components/Footer/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='bg-green-400 p-4 text-4xl'>React Router</h1>
      <Header/>
      <Home/>
      <Footer/>
    </>
  )
}

export default App
