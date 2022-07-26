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

const NewArticleForm = ({accessToken}) => {

  const navigate = useNavigate()

//----- define form data ! -----
  const [formData, setFormData] = useState({
    user:'base_user',
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
    const url = process.env.REACT_APP_API_URL + 'wardrobe/'
    const opts = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        // 'Authorization': `Bearer ${accessToken}`
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
              <option value='1'>Red</option>
              <option value='2'>Orange</option>
              <option value='3'>Yellow</option>
              <option value='4'>Blue</option>
              <option value='5'>Green</option>
              <option value='6'>White</option>
              <option value='7'>Beige</option>
              <option value='8'>Cream</option>
              <option value='9'>Black</option>
              <option value='10'>Purple</option>
              <option value='11'>Pink</option>
              <option value='12'>Gray</option>
              <option value='13'>Brown</option>
              <option value='14'>Tan</option>
              <option value='15'>Multi</option>
            </select>

            {/* -- article type -- */}
          <label for='article_type' className='flex justify-center justify-items-center m-auto p-2 font-nanum-gothic'>TYPE:</label>
            <select id='article_type' className='flex justify-center justify-items-center m-auto p-2 font-nanum-gothic mb-4 shadow-md rounded' name='article_type' onChange={handleChange}>
              <option value='1'>Top</option>
              <option value='2'>Bottoms</option>
              <option value='3'>Dress</option>
              <option value='4'>Jumpsuit/Romper</option>
              <option value='5'>Sweater</option>
              <option value='6'>Cardigan</option>
              <option value='7'>Outerwear</option>
              <option value='8'>Bodysuit</option>
              <option value='9'>Lingerie</option>
              <option value='10'>Shoes</option>
              <option value='11'>Accessory</option>
              <option value='12'>Socks/Tights</option>
            </select>

            {/* -- category -- */}
          <label for='category' className='flex justify-center justify-items-center m-auto p-2 font-nanum-gothic'>CATEGORY:</label>
            <select id='category' className='flex justify-center justify-items-center m-auto p-2 font-nanum-gothic mb-4 shadow-md rounded' name='category' onChange={handleChange}>
              <option value='1'>Loungewear</option>
              <option value='2'>Casual</option>
              <option value='3'>Formal</option>
              <option value='4'>Party</option>
              <option value='5'>Work</option>
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