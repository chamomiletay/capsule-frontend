import React from 'react'
import './Main.css'

const Footer = () => {
  return (
    <div className='flex flex-col h-screen justify-between'>
      <footer className='h-12 bg-blue-100 shadow-md bottom-0 fixed w-full'>
        <p className='p-3'>Copyright Ⓒ 2022 Taylor Lee. All rights reserved.</p>
      </footer>
    </div>
  )
}

export default Footer