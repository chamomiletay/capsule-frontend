// ----- i m p o r t s ! -----
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './Main.css'

//----- brain dump -----
    //- create new wardrobe piece via form
    //- criteria:
        //- user
        //- name
        //- color
        //- image
        //- article type (sweater, top, etc.)
        //- category (casual, formal, etc.)
        //- brand (optional)
        //- quantity
//----- end brain dump . -----


//----- pass userLoggedIn in as prop -----//
const NewArticleForm = ({userLoggedIn}) => {

  const navigate = useNavigate()

//----- define form data ! -----
  const [formData, setFormData] = useState({
    title:'',
    article_1: '',
    article_2: '',
    article_3: ''
  })

  // const [image, setImage] = useState({image: ''})

const handleChange = (e) => {
  setFormData({...formData, [e.target.id]: e.target.value})
  console.log(e.target.id, e.target.value)
  // setImage({image: e.target.files[0]})
}

//----- handle form submission -----
  const handleSubmit = (e) => {

    e.preventDefault()

  //--- redirect upon submit ---
    navigate('/my_outfits')
    // const url = process.env.REACT_APP_API_URL + 'favorites/'
    const url = 'https://capsule-capstone.herokuapp.com/favorites/'
    const opts = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData)
      // body: formData
    }
    fetch(url, opts)
    .then(res => res.json())
    .then(data => console.log(data))
  }
  
  return (
    <div className='m-10'>

  {/* ----- create new article of clothing ----- */}
      <h3 className='font-edu-vic-wa-nt-beginner text-3xl'>Save New Outfit</h3>

      <div className='justify-center items-center bg-plants max-w-none m-5 max-h-500 py-8 border-double border-4 border-slate-500 rounded shadow-md'>

        <form onSubmit={handleSubmit}>

          {/* -- article name -- */}
          <label for='name' className='flex justify-center justify-items-center m-auto p-2 font-nanum-gothic'>OUTFIT NAME:</label>
          <input id='title' className='flex justify-center justify-items-center m-auto p-2 shadow-md rounded font-nanum-gothic mb-4' type='text' placeholder='outfit name' onChange={handleChange}/>

            {/* -- category -- */}
          <label for='category' className='flex justify-center justify-items-center m-auto p-2 font-nanum-gothic'>ARTICLE 1:</label>
            <select id='category' className='flex justify-center justify-items-center m-auto p-2 font-nanum-gothic mb-4 shadow-md rounded' name='category' onChange={handleChange}>
              <option value='Loungewear'>Loungewear</option>
              <option value='Casual'>Casual</option>
              <option value='Formal'>Formal</option>
              <option value='Party'>Party</option>
              <option value='Work'>Work</option>
            </select>

            {/* -- quantity -- */}
          <label for='quantity' className='flex justify-center justify-items-center m-auto p-2 font-nanum-gothic'>QUANTITY:</label>
          <input id='quantity' className='flex justify-center justify-items-center m-auto p-2 font-nanum-gothic mb-4 shadow-md rounded' type='number' name='quantity' onChange={handleChange}></input>

          <button type='submit' className='flex justify-center justify-items-center m-auto p-2 font-nanum-gothic bg-blue-100 shadow-md rounded border-solid border-2 border-blue-500 font-bold text-slate-700'>Add Item</button>

        </form>

      </div>


    </div>
  )
}

export default NewArticleForm