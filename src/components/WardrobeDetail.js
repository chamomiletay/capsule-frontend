//----- Imports -----//
import React, { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom';
import './Main.css';

//----- brain dump -----
    //- show individual wardrobe pieces upon login
    //- ability to update or delete 'post'
//----- end brain dump . -----


const WardrobeDetail = () => {

  let {id} = useParams()

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
    </div>

  )
}

export default WardrobeDetail