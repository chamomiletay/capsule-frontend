// ----- i m p o r t s ! -----
import React from 'react'

//----- brain dump -----
  //-- should display list of saved outfits upon login
  
//----- end brain dump . -----

const Profile = ({userLoggedIn}) => {
  return (
    <div>

      <div className='justify-center items-center bg-plants max-w-none m-16 max-h-500 py-8 border-double border-4 border-slate-500 rounded shadow-md'>

      <h3 className='font-edu-vic-wa-nt-beginner text-3xl'>{userLoggedIn}</h3>

      </div>
    </div>
  )
}

export default Profile