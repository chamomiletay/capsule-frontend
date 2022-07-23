// ----- i m p o r t s ! -----
import React from "react";
import Spline from './Spline'
import './Main.css';
import { Link } from "react-router-dom";

//----- brain dump -----
  //-- import spline app
  //-- 
//----- end brain dump . -----

function Main() {
  return (
    <div className="py-20 bg-white">
        {/* render spline app */}
        <Spline />

          <h2 className="text-2xl font-nanum-gothic mb-40">Welcome to your Capsule wardrobe.</h2>

        <div className="w-screen h-96 bg-fixed bg-center justify-center items-center bg-florals bg-opacity-20"></div>
          
        <div className="p-20 space-y-8 bg-slate-200">
          <p className="text-xl font-nanum-gothic italic">
          Have too many clothes but have nothing to wear or want to build outfits more effectively? Capsule cuts your morning routine in half and promotes sustainability by generating random outfits based on the items in your wardrobe.
          </p>
        </div>  
        <div className="w-screen h-96 bg-fixed bg-center  justify-center items-center bg-florals bg-opacity-20"></div>

        <div className="w-screen h-96 bg-fixed bg-center  justify-center items-center">
          <br/>
          <p>Already a user? 
            <Link to='/login'> Sign in</Link>
          </p>
        </div>
        

        
    </div>
  )
}

export default Main