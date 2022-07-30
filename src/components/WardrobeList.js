// ----- i m p o r t s ! -----
import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import './Main.css';

//----- brain dump -----
    //- clickable objects -> link to WardrobeDetail
    //- add wardrobe item button on page -> links to NewWardrobeItem
//----- end brain dump . -----

//----- pass accessToken in as prop -----//
const WardrobeList = ({accessToken}) => {

  //--- auth data ---


  //--- retreive data ---
  const wardrobeRestEndpoint = 'wardrobe_protected/'
  const [wardrobe, setWardrobe] = useState([])

  useEffect(() => {
    const url = process.env.REACT_APP_API_URL + wardrobeRestEndpoint
    // const url = 'https://capsule-capstone.herokuapp.com/' + wardrobeRestEndpoint
    const opts = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${accessToken}`
      }
    }
    fetch(url, opts)
    .then(res => res.json())
    .then(data => {
      console.log(data)
      setWardrobe(data)
    })
  }, )


  return (
    
    <div>

        <div className='justify-center items-center bg-plants max-w-none m-16 max-h-500 py-4 border-double border-4 border-slate-500 rounded shadow-md'>
            <h2 className='text-3xl font-edu-vic-wa-nt-beginner pt-2'>My Wardrobe</h2>
            
            <Link to='/newarticle'>
              <button class='bg-sky-500 rounded text-white font-bold py-1 px-3 my-2 shadow-md'type='button'>Add Article</button>
            </Link>

          {/*--- display each article image ---*/}
          <div className='justify-center items-center w-auto p-4'>
            <ul>
              {
                wardrobe.map((item, index) => {
                  return (
                    // ---- change to item.image later ----
                    <li className='font-nanum-gothic border-solid border-2 border-slate-400 bg-white rounded mx-auto my-2 w-44 h-36 shadow-md p-10 transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110 hover:bg-orange-200 duration-300' key={index}>
                    <Link to={`/articledetail/${item.id}`} key={item.id}>{item.name}</Link>  
                      
                      </li>
                  )
              })
              }
              </ul>
          </div>
        </div>

    </div>
  )
}

export default WardrobeList