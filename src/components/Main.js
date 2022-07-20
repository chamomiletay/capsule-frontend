// ----- i m p o r t s ! -----
import React from "react";
import Spline from './Spline'
import './Main.css';

//----- brain dump -----

//----- end brain dump . -----

function Main() {
  return (
    <div>

      {/* render spline app */}
      <Spline />

      <div className="main">

        <h2 className="text-3xl font-nanum-gothic">Welcome to your capsule wardrobe.</h2>
      
      </div>
        
    </div>
  )
}

export default Main