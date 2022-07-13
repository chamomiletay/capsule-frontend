//----- Imports -----//
import React from 'react'
import { Link } from 'react-router-dom'
// import ReactDOM from 'react-dom'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faShirt } from '@fortawesome/free-solid-svg-icons'
import './Header.css';

// const element = <FontAwesomeIcon icon={faShirt} />

// ReactDOM.render(element, document.body)

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

              <Link to={''}>
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