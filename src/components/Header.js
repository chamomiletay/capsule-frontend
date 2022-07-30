//----- Imports -----//
import React from 'react'
import { Link } from 'react-router-dom'
// import './Header.css';


const Header = ({userLoggedIn}) => {
  return (
    
      <div className='p-4 max-w-none mx-auto bg-blue-100 shadow-md flex items-center space-x-4'>

        {/* --- title with nav link to home --- */}

        <Link to={'/'}>
          <h1 className='text-3xl font-medium text-black font-edu-vic-wa-nt-beginner'>Capsule .</h1>
        </Link>  


        {/* ---- nav links ---- */}

        <div className='flex-1'>
          <ul>

            {/* display link as username if logged in */}
            <Link to={ userLoggedIn ? `/profile/${userLoggedIn}` : '/login/'}>
              {userLoggedIn ? <li className='inline float-right px-4'>{userLoggedIn}</li> : <li className='inline float-right px-4'>log in</li>}
            </Link>


            <Link to={'/wardrobelist'}>
              <li className='inline float-right px-4'>wardrobe</li>
            </Link>

            <Link to={'/randomoutfitform'}>
              <li className='inline float-right px-4'>new outfit</li>
            </Link>

          </ul>

        </div>
      </div>
      

    
  )
}

export default Header