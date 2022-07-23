//----- Imports -----//
import React, { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom';
import './Main.css';

//----- brain dump -----
    //- show individual wardrobe pieces upon login
    //- ability to update or delete 'post'
//----- end brain dump . -----


const WardrobeDetail = () => {
  let {id} = useParams();

  //--- retreive data ---
  const wardrobeRestEndpoint = `wardrobe/${id}`
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

    <div className='justify-center items-center bg-red-50 max-w-none m-5 max-h-500 py-8 border-double border-4 border-slate-500 rounded'>
      <h3 className='font-edu-vic-wa-nt-beginner text-3xl'>Wardrobe Detail</h3>
        <p>Name:{wardrobe[0].name}</p>

        <Link className='bg-sky-500 rounded text-white font-bold py-1 px-3 my-2 shadow-md' to='/wardrobelist'>Back</Link>
    </div>

  )
}

export default WardrobeDetail