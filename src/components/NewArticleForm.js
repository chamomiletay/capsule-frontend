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
    user: userLoggedIn ? {userLoggedIn} : 'unknown',
    name:'',
    color:'',
    article_type:'',
    category:'',
    brand:'',
    quantity:''
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
    navigate('/wardrobelist')
    // const url = process.env.REACT_APP_API_URL + 'wardrobe/'
    const url = 'https://capsule-capstone.herokuapp.com/' + 'wardrobe/'
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
      <h3 className='font-edu-vic-wa-nt-beginner text-3xl'>New Clothing Article</h3>

      <div className='justify-center items-center bg-plants max-w-none m-5 max-h-500 py-8 border-double border-4 border-slate-500 rounded shadow-md'>

        <form onSubmit={handleSubmit}>

          {/* -- article name -- */}
          <label for='name' className='flex justify-center justify-items-center m-auto p-2 font-nanum-gothic'>ARTICLE NAME:</label>
          <input id='name' className='flex justify-center justify-items-center m-auto p-2 shadow-md rounded font-nanum-gothic mb-4' type='text' placeholder='article name' onChange={handleChange}/>

          {/* -- article color -- */}
          <label for='color' className='flex justify-center justify-items-center m-auto p-2 font-nanum-gothic'>COLOR:</label>
            <select id='color' className='flex justify-center justify-items-center m-auto p-2 font-nanum-gothic mb-4 shadow-md rounded' name='color' onChange={handleChange}>
              <option value='Red'>Red</option>
              <option value='Orange'>Orange</option>
              <option value='Yellow'>Yellow</option>
              <option value='Blue'>Blue</option>
              <option value='Green'>Green</option>
              <option value='White'>White</option>
              <option value='Beige'>Beige</option>
              <option value='Cream'>Cream</option>
              <option value='Black'>Black</option>
              <option value='Purple'>Purple</option>
              <option value='Pink'>Pink</option>
              <option value='Gray'>Gray</option>
              <option value='Brown'>Brown</option>
              <option value='Tan'>Tan</option>
              <option value='Multi'>Multi</option>
            </select>

            {/* -- article type -- */}
          <label for='article_type' className='flex justify-center justify-items-center m-auto p-2 font-nanum-gothic'>TYPE:</label>
            <select id='article_type' className='flex justify-center justify-items-center m-auto p-2 font-nanum-gothic mb-4 shadow-md rounded' name='article_type' onChange={handleChange}>
              <option value='Top'>Top</option>
              <option value='Bottoms'>Bottoms</option>
              <option value='Dress'>Dress</option>
              <option value='Jumpsuit/Romper'>Jumpsuit/Romper</option>
              <option value='Sweater'>Sweater</option>
              <option value='Cardigan'>Cardigan</option>
              <option value='Outerwear'>Outerwear</option>
              <option value='Bodysuit'>Bodysuit</option>
              <option value='Lingerie'>Lingerie</option>
              <option value='Shoes'>Shoes</option>
              <option value='Accessory'>Accessory</option>
              <option value='Socks/Tights'>Socks/Tights</option>
            </select>

            {/* -- category -- */}
          <label for='category' className='flex justify-center justify-items-center m-auto p-2 font-nanum-gothic'>CATEGORY:</label>
            <select id='category' className='flex justify-center justify-items-center m-auto p-2 font-nanum-gothic mb-4 shadow-md rounded' name='category' onChange={handleChange}>
              <option value='Loungewear'>Loungewear</option>
              <option value='Casual'>Casual</option>
              <option value='Formal'>Formal</option>
              <option value='Party'>Party</option>
              <option value='Work'>Work</option>
            </select>

            {/* -- clothing brand -- */}
          <label for='brand' className='flex justify-center justify-items-center m-auto p-2 font-nanum-gothic'>BRAND:</label>
          <input id='brand' className='flex justify-center justify-items-center m-auto p-2 font-nanum-gothic mb-4 shadow-md rounded' type='text' placeholder='brand' onChange={handleChange}/>

          {/* <label for='brand' className='flex justify-center justify-items-center m-auto p-2 font-nanum-gothic'>PHOTO:</label>
          <input id='image' className='flex justify-center justify-items-center m-auto py-2 pl-60 font-nanum-gothic' type='file' name='image' accept='image/*' onChange={handleChange}/> */}

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