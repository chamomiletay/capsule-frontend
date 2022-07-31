import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import './Main.css';

const MyOutfits = () => {

    const favoritesRestEndpoint = 'favorites/'
    const [favorite, setFavorite] = useState([])

    useEffect(() => {
        // const url = process.env.REACT_APP_API_URL + favoritesRestEndpoint
        const url = 'https://capsule-capstone.herokuapp.com/' + favoritesRestEndpoint
        const opts = {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            // 'Authorization': `Bearer ${accessToken}`
          }
        }
        fetch(url, opts)
        .then(res => res.json())
        .then(data => {
          console.log(data)
          setFavorite(data)
        })
      }, [])

  return (
    <div className='m-10'>


      <div className='justify-center items-center bg-plants max-w-none m-5 max-h-500 py-8 border-double border-4 border-slate-500 rounded shadow-md'>
        
      <h3 className='font-edu-vic-wa-nt-beginner text-3xl'>My Outfits</h3>

      <Link to='/create_outfit'>
              <button class='bg-sky-500 rounded text-white font-bold py-1 px-3 my-2 shadow-md'type='button'>Create Outfit</button>
            </Link>

      <div className='justify-center items-center w-auto p-4'>
            <ul>
              {
                favorite.map((item, index) => {
                  return (
                    // ---- change to item.image later ----
                    <li className='font-nanum-gothic border-solid border-2 border-slate-400 bg-white rounded mx-auto my-2 w-44 h-36 shadow-md p-10 transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110 hover:bg-orange-200 duration-300' key={index}>
                    <Link to={`/favoritedetail/${item.id}`} key={item.id}>{item.title}</Link>  
                      
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

export default MyOutfits