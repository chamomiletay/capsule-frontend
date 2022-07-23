// ----- i m p o r t s ! -----
import React, { useState } from 'react'
import './Main.css'

//----- brain dump -----
    // - prompt user for username and password
//----- end brain dump . -----

const LogIn = () => {

    //----- define form info -----
    const [formInfo, setFormInfo] = useState({username: '', password: ''})

    const handleChange = (e) => {
    setFormInfo({...formInfo, [e.target.id]: e.target.value})
    }

    const handleLogin = (e) => {

    }

    return (
        <div className='m-20'>
            <h2 className='font-nanum-gothic text-2xl mb-6'>Log In</h2>
            <p className='font-nanum-gothic m-4'>Sign in for more:</p>
            <p className='inline m-20 font-nanum-gothic'>Wardrobe List</p> 
            <p className='inline m-20 font-nanum-gothic'>My Outfits</p>
            <p className='inline m-20 font-nanum-gothic'>Outfit Generator</p>


        {/*----- Login form -----*/}
        <div className='font-nanum-gothic justify-center items-center bg-red-50 max-w-none m-5 max-h-500 py-8 border-double border-4 border-slate-500 rounded'>
            <form onSubmit={{handleLogin}}>
                <label>Username:</label>
                <input className='ml-2 mr-6 shadow-md rounded pl-2' id='username' name='username' type='text' onChange={handleChange}/>
                <label>Password:</label>
                <input className='ml-2 mr-6 shadow-md rounded pl-2' id='password' name='password' type='text' onChange={handleChange}/>
                <div className='mt-6'>
                    <button className='flex justify-center justify-items-center m-auto p-2 font-nanum-gothic bg-blue-100 shadow-md rounded border-solid border-2 border-blue-500 font-bold text-slate-700' type='submit'>Sign In</button>
                </div>
            </form>
        </div>
    </div>
            )
}

export default LogIn