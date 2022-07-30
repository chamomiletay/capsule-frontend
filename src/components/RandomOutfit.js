import React, { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom';
import './Main.css';

const RandomOutfit = () => {

     //--- retreive data ---
    const [wardrobe, setWardrobe] = useState([])
    let {id} = useParams()

    useEffect(() => {
        const url = process.env.REACT_APP_API_URL + `wardrobe/${id}`
         // const url = `https://capsule-capstone.herokuapp.com/wardrobe/wardrobe`
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
       }, []) 

       const randomItem = wardrobe[Math.floor(Math.random()*wardrobe.length)]
    //    console.log(randomItem.name)

  return (
    <div>Random Outfit
   
            <p className='font-nanum-gothic border-solid border-2 border-slate-400 bg-white rounded mx-auto my-2 w-44 h-36 shadow-md p-10 transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110 hover:bg-orange-200 duration-300'>
                 {randomItem.name}
            </p>

    </div>
  )
}

export default RandomOutfit