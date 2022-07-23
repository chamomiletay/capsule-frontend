//----- Imports -----//
import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import './Main.css';

//----- brain dump -----
    //- show individual wardrobe pieces upon login
    //- ability to update or delete 'post'
//----- end brain dump . -----


const WardrobeDetail = () => {

  //--- retreive data ---
  const wardrobeRestEndpoint = 'create/'
  const [wardrobe, setWardrobe] = useState([])


  useEffect(() => {
    fetch(process.env.REACT_APP_API_URL + wardrobeRestEndpoint)
    .then(res => res.json())
    .then(data => {
      console.log(data)
      setWardrobe(data)
    })
    .catch(console.error)
  }, [])



  return (

    <div>
        WardrobeDetail
        <p>Name:{wardrobe.name}</p>

        <Link className='bg-sky-500 rounded text-white font-bold py-1 px-3 my-2 shadow-md' to='/wardrobelist'>Back</Link>
    </div>

  )
}

export default WardrobeDetail