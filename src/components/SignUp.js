// ----- i m p o r t s ! -----
import React, { useState } from 'react'
import './Main.css'

const SignUp = ({setUserLoggedIn}) => {

    //---- handle errors -----
    const [networkError, setNetworkError] = useState(null)
    const [clientError, setClientError] = useState(null)

    //----- define form info -----
    const [formInfo, setFormInfo] = useState({username: '', password: ''})

     //--- check for status error ---
     const statusError = (resp) => {
        setNetworkError(`Network Error: ${resp.status} - Check that credentials are correct`)
    }

    //--- check that all fields are filled ---
    const formValidate = (formInfo) => {
        const blankTextField = Object.entries(formInfo).filter(kv => kv[1] === '')
        if (blankTextField.length > 0) {
            setClientError(`*${blankTextField[0][0]} cannot be left blank`)
            return false
        }
        setClientError(null)
        return true
    }


    const handleChange = (e) => {
    setFormInfo({...formInfo, [e.target.id]: e.target.value})
    }

    const handleLogin = (e) => {
        console.log(formInfo)
        e.preventDefault()

        const userData = {...formInfo }
        console.log(userData)

        setNetworkError(null)

        //--- check for no validation errors ---
        if (!formValidate(formInfo)) {
            return
        }

        const signUpEndpoint = 'api/auth/signup/'

        const reactApiUrl = process.env.REACT_APP_API_URL
        // const reactApiUrl = 'https://capsule-capstone.herokuapp.com/'

        //--- retrieve data ---
        fetch (reactApiUrl + signUpEndpoint,
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(userData)
            }
        )
            .then(res => {
                if (res.ok) {
                    return res.json()
                } else {
                    statusError(res)
                    return Promise.resolve(null)
                }
            })
            .then(data => {
                if (!data) {
                    console.log(`trouble retrieving data: ${networkError}`)
                } else {
                    console.log(data)
                }
            })
        }

  return (
    <div className='m-20'>
            <h2 className='font-nanum-gothic text-2xl mb-6'>Sign Up</h2>
            <p className='font-nanum-gothic m-4'>Sign up to access these features:</p>
            <p className='inline m-20 font-nanum-gothic'>Wardrobe List</p> 
            <p className='inline m-20 font-nanum-gothic'>My Outfits</p>
            <p className='inline m-20 font-nanum-gothic'>Outfit Generator</p>


        {/*----- Login form -----*/}
        <div className='font-nanum-gothic justify-center items-center bg-red-50 max-w-none m-5 max-h-500 py-8 border-double border-4 border-slate-500 rounded'>
            <form onSubmit={handleLogin}>
                <label>Username:</label>
                <input className='ml-2 mr-6 shadow-md rounded pl-2' id='username' name='username' type='text' onChange={handleChange}/>
                <label>Password:</label>
                <input className='ml-2 mr-6 shadow-md rounded pl-2' id='password' name='username' type='text' onChange={handleChange}/>
                <div className='mt-6'>
                    <button className='flex justify-center justify-items-center m-auto p-2 font-nanum-gothic bg-blue-100 shadow-md rounded border-solid border-2 border-blue-500 font-bold text-slate-700' type='submit'>Sign Up</button>
                
                    {/* display error message to user */}
                    <p className='pt-4 italic'>{networkError}</p>
                    <p className='pt-4 italic'>{clientError}</p>

                </div>
            </form>
        </div>
    </div>
  )
}

export default SignUp