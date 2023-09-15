import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/header'
import Article from './components/article'
function App() {
  
  
  return (
    <>
    <div className='h-screen'>
        <Header/>
        <Article/>
    </div>
    </>
  )
}

export default App;
