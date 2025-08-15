import { useState } from 'react'
import './App.css'
import Home from './pages/home'
import About from './pages/about'
import Contact from './pages/contact'
// npm install react-router-dom
import { Routes, Route } from 'react-router-dom'
import Navbar from './nav.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
<>
    <Navbar/>
    <Routes>
      <Route path='/' element={<p>Main page</p>}/>
      <Route path='/home' element={ <Home/>}/>
      <Route path='/about' element={ <About/>}/>
      <Route path='/contact' element={ <Contact/>}/>
      <Route path="*" element={<p>Page not Found</p>}/> 
    </Routes>
    </>
  )
}

export default App;
