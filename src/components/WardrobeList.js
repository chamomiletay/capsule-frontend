// ----- i m p o r t s ! -----
import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import './Main.css';

//----- brain dump -----
    //- clickable objects -> link to WardrobeDetail
    //- add wardrobe item button on page -> links to NewWardrobeItem
//----- end brain dump . -----

const WardrobeList = ({userSignedIn, accessToken}) => {

  //--- retreive data ---
  const wardrobeRestEndpoint = 'create'
  const [wardrobe, setWardrobe] = useState([])

  useEffect(() => {
    fetch(process.env.REACT_APP_API_URL + wardrobeRestEndpoint)
    .then(res => res.json())
    .then(data => {
      console.log(data)
      setWardrobe(data)
    })
  }, [])


  return (
    <div>

        <div className='justify-center items-center bg-red-50 max-w-none m-16 max-h-500 py-4 border-double border-4 border-slate-500 rounded'>
            <h2 className='text-2xl font-nanum-gothic pt-2'>My Wardrobe</h2>
            
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