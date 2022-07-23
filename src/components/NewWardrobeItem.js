// ----- i m p o r t s ! -----
import React, { useState } from 'react'
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

const NewWardrobeItem = () => {

//----- define form data ! -----
  const [user, setUser] = useState({user: 'base_user'})
  const [name, setName] = useState({name: ''})
  const [color, setColor] = useState({color: ''})
  const [image, setImage] = useState({image: ''})
  const [article_type, setArticle_type] = useState({article_type: ''})
  const [category, setCategory] = useState({category: ''})
  const [brand, setBrand] = useState({brand: ''})
  const [quantity, setQuantity] = useState({quantity: ''})

  // const [submitData, setSubmitData] = useState({
  //   user:'',
  //   name: '',
  //   image: '',
  //   article_type: '',
  //   brand: '',
  //   quantity: ''
  // })

const handleChange = (e) => {
  // setSubmitData({...submitData, [e.target.id]: e.target.value})
  console.log(e.target.id, e.target.value)
  setUser({...user, [e.target.id]: e.target.value})
  setName({...name, [e.target.id]: e.target.value})
  setColor({...color, [e.target.id]: e.target.value})
  // setImage({image: e.target.files[0]})
  setArticle_type({...article_type, [e.target.id]: e.target.value})
  setCategory({...category, [e.target.id]: e.target.value})
  setBrand({...brand, [e.target.id]: e.target.value})
  setQuantity({...quantity, [e.target.id]: e.target.value})
}

//----- handle form submission -----
  const handleSubmit = (e) => {
    console.log(color)
    e.preventDefault()
    // let formData = new FormData()
    // formData.append('user', user.user)
    // formData.append('name', name.name)
    // formData.append('color', color.color)
    // formData.append('article_type', article_type.article_type)
    // formData.append('category', category.category)
    // formData.append('brand', brand.brand)
    // formData.append('quantity', quantity.quantity)
    // formData.append('image', image.image)
    // const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjU4NTQ3NzE1LCJpYXQiOjE2NTg1NDc0MTUsImp0aSI6IjgxMGU5ZDk3MjRjMTQyOThiNDFmYmE4ODQyY2ZjNDU5IiwidXNlcl9pZCI6MX0.eRGJDm6E8Qhr-EiRdB7GOhZ0fwmVDWh_TjAtOUAR76U'
    const url = process.env.REACT_APP_API_URL + 'create/'
    const opts = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        // 'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify(user, name, color, article_type, category, brand, quantity)
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

      <div className='justify-center items-center bg-red-50 max-w-none m-5 max-h-500 py-8 border-double border-4 border-slate-500 rounded'>

        <form onSubmit={handleSubmit}>

          <label for='name' className='flex justify-center justify-items-center m-auto p-2 font-nanum-gothic'>ARTICLE NAME:</label>
          <input id='name' className='flex justify-center justify-items-center m-auto p-2 shadow-md rounded font-nanum-gothic mb-4' type='text' placeholder='article name' onChange={handleChange}/>
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
          <label for='category' className='flex justify-center justify-items-center m-auto p-2 font-nanum-gothic'>CATEGORY:</label>
            <select id='category' className='flex justify-center justify-items-center m-auto p-2 font-nanum-gothic mb-4 shadow-md rounded' name='category' onChange={handleChange}>
              <option value='1'>Loungewear</option>
              <option value='2'>Casual</option>
              <option value='3'>Formal</option>
              <option value='4'>Party</option>
              <option value='5'>Work</option>
            </select>
          <label for='brand' className='flex justify-center justify-items-center m-auto p-2 font-nanum-gothic'>BRAND:</label>
          <input id='brand' className='flex justify-center justify-items-center m-auto p-2 font-nanum-gothic mb-4 shadow-md rounded' type='text' placeholder='brand' onChange={handleChange}/>

          {/* <label for='brand' className='flex justify-center justify-items-center m-auto p-2 font-nanum-gothic'>PHOTO:</label>
          <input id='image' className='flex justify-center justify-items-center m-auto py-2 pl-60 font-nanum-gothic' type='file' name='image' accept='image/*' onChange={handleChange}/> */}

          <label for='quantity' className='flex justify-center justify-items-center m-auto p-2 font-nanum-gothic'>QUANTITY:</label>
          <input id='quantity' className='flex justify-center justify-items-center m-auto p-2 font-nanum-gothic mb-4 shadow-md rounded' type='number' name='quantity' onChange={handleChange}></input>

          <button type='submit' className='flex justify-center justify-items-center m-auto p-2 font-nanum-gothic bg-blue-100 shadow-md rounded border-solid border-2 border-blue-500 font-bold text-slate-700'>Add Item</button>

        </form>

      </div>


    </div>
  )
}

export default NewWardrobeItem