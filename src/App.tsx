import { useState } from 'react'
import './style.css' 

import Navbar from './components/Navbar'
import Midsection from './components/Midsection'

function App() {

  return (
    <div className="App">
        <Navbar/> 
        <Midsection/>
    </div>
  )
}

export default App
