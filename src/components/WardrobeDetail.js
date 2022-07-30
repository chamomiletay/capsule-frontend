//----- Imports -----//
import React, { useState, useEffect } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom';
import './Main.css';

//----- brain dump -----
    //- show individual wardrobe pieces upon login
    //- ability to update or delete 'post'
//----- end brain dump . -----


const WardrobeDetail = ({accessToken}) => {


  //--- auth data ---
  // const [userSignedIn, setUserSignedIn] = useState(localStorage.getItem('user'))
  // const [accessToken, setAccessToken] = useState(localStorage.getItem('access_token'))

  let {id} = useParams()

  //--- retreive data ---
  const [wardrobe, setWardrobe] = useState([])
  const navigate = useNavigate()

  useEffect(() => {
    // const url = process.env.REACT_APP_API_URL + `wardrobe/${id}`
    const url = 'https://capsule-capstone.herokuapp.com/' + `wardrobe/${id}`
    const opts = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      }
    }
    fetch(url, opts)
    .then(res => res.json())
    .then(data => {
      setWardrobe(data)
      console.log(data)
    })
    .catch(console.error)
  }, )

  // console.log(wardrobe[0].name)


  //--- delete data ---

  const deleteArticle = async () => {
    await fetch(`http://localhost:8000/wardrobe/${id}`, {
      method: 'DELETE',
    })
    navigate('/wardrobelist')
  }

  

  return (

    <div className='justify-center items-center bg-red-50 max-w-none m-5 max-h-500 py-8 border-double border-4 border-slate-500 rounded'>
      <h2 className='font-edu-vic-wa-nt-beginner text-3xl'>{wardrobe.name}</h2>
        
      <p>Color: {wardrobe.color}</p>
      <p>Type: {wardrobe.article_type}</p>
      <p>Category: {wardrobe.category}</p>
      <p>Brand: {wardrobe.brand}</p>
      <p>Quantity: {wardrobe.quantity}</p>


      <button onClick={deleteArticle}>Delete</button>
      {/* <button onClick={editArticle}>Update</button> */}
      <Link className='bg-sky-500 rounded text-white font-bold py-1 px-3 my-2 shadow-md' to='/wardrobelist'>Back</Link>
    </div>

  )
}

export default WardrobeDetail