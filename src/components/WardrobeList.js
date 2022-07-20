// ----- i m p o r t s ! -----
import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom';
import NewWardrobeItem from './NewWardrobeItem';
import './WardrobeList.css';

//----- brain dump -----
    //- clickable objects -> link to WardrobeDetail
    //- add wardrobe item button on page -> links to NewWardrobeItem
//----- end brain dump . -----

const WardrobeList = () => {

  //--- retreive data ---
  const wardrobeRestEndpoint = 'wardrobe'
  const [wardrobe, setWardrobe] = useState([])

  useEffect(() => {
    fetch(process.env.REACT_APP_API_URL + wardrobeRestEndpoint)
    .then(res => res.json())
    .then(data => {
      console.log(data)
      setWardrobe(data)
    })
  })


  return (
    <div>

        <div className='wardrobe-container'>
            <h2>My Wardrobe</h2>
            <Link to='/newarticle'>
              <button type='button'>Add Article</button>
            </Link>

          {/*--- display each article image ---*/}
          <ul>
            {
              wardrobe.map((item, index) => {
                return (
                  // ---- change to item.image later ----
                  <li key={index}>{item.name}, {item.user}</li>
                )
            })
            }
            </ul>


        </div>

    </div>
  )
}

export default WardrobeList