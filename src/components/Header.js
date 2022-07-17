//----- Imports -----//
import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css';


const Header = () => {
  return (
    //--- title with nav link to home ---//
      <div className='container'>

        <div className='flex-child'>

          <Link to={'/'}>
            <h1 className='title-link'>capsule .</h1>
          </Link>

        </div>

    {/* ---- nav links ---- */}
        <div className='flex-child'>

            <ul>
              <Link to={'/profile'}>
                <li>user</li>
              </Link>

              <Link to={'/wardrobelist'}>
                <li>wardrobe</li>
              </Link>

              <Link to={''}>
                <li>new outfit</li>
              </Link>

            </ul>

        </div>

      </div>

    
  )
}

export default Header