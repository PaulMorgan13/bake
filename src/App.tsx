import { useState } from 'react'
import './style.css' 

import Header from './components/Header'
import Midsection from './components/Midsection'

function App() {

  return (
    <div className="App">
        <Header/>
        <Midsection/>
    </div>
  )
}

export default App
