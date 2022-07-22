// ----- i m p o r t s ! -----
import React from "react";
import Spline from './Spline'
import './Main.css';
import { Link } from "react-router-dom";

//----- brain dump -----

//----- end brain dump . -----

function Main() {
  return (
    <div className="justify-center items-center p-40">

      <header>

        <div className="main">

        {/* render spline app */}
        <Spline />

          <h2 className="text-2xl font-nanum-gothic">Welcome to your Capsule wardrobe.</h2>

          <br/>
          <p>Already a user? 
            <Link to='/login'> Sign in</Link>
          </p>
        
        </div>

      </header>
        
    </div>
  )
}

export default Main