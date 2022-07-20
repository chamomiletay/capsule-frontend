// ----- i m p o r t s ! -----
import React, { useState } from 'react'
import './LogIn.css'

//----- brain dump -----
    // - prompt user for username and password
//----- end brain dump . -----

const LogIn = () => {

  return (
    <div>
        <h2>Log In</h2>
        <p>Sign in for more:</p>
        <p className='descriptors'>Wardrobe List</p> 
        <p className='descriptors'>My Outfits</p>
        <p className='descriptors'>Outfit Generator</p>


{/*----- Login form -----*/}
        <form onSubmit={{handleLogin}}>
            <label>Username:</label>
            <input id='username' name='username' type='text' onChange={handleChange}/>
            <label>Password:</label>
            <input id='password' name='password' type='text' onChange={handleChange}/>
            <button type='submit'>Sign In</button>
        </form>
    </div>
  )
}

export default LogIn