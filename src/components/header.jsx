import React from 'react'
import logo from '../assets/coffee-logo.jpg'

const header = () => {
  return (
    <div className='flex flex-col h-screen items-center w-screen'>
      <div className='flex flex-row justify-around w-screen'>
        <h1 className='text-8xl font-bold'>Coco.</h1>
        <img className='h-24 w-24' src="https://c8.alamy.com/comp/2NPD1GX/minimalist-black-and-white-cup-of-tea-or-coffee-with-steam-vector-illustration-2NPD1GX.jpg" alt="" />
      </div>
        <h5>Read all your tech news (TechCrunch, Hacker News, Product Hunt and many more) in one place.</h5>
    </div>
  )
}

export default header