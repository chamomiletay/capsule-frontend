// ----- i m p o r t s ! -----
import React, { useState } from 'react'
import './NewWardrobeItem.css'

//----- brain dump -----
    //- create new wardrobe piece via form
    //- criteria:
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
  const [name, setName] = useState({name: ''})
  const [color, setColor] = useState({color: ''})
  const [image, setImage] = useState({image: ''})
  const [articleType, setArticleType] = useState({article_type: ''})
  const [category, setCategory] = useState({category: ''})
  const [brand, setBrand] = useState({brand: ''})
  const [quantity, setQuantity] = useState({quantity: ''})

const handleChange = (e) => {
  setName({...name, [e.target.id]: e.target.value})
  setColor({...color, [e.target.id]: e.target.value})
  setImage({...image, [e.target.id]: e.target.value})
  setArticleType({...articleType, [e.target.id]: e.target.value})
  setCategory({...category, [e.target.id]: e.target.value})
  setBrand({...brand, [e.target.id]: e.target.value})
  setQuantity({...quantity, [e.target.id]: e.target.value})
}

//----- handle form submission -----
  const handleSubmit = (e) => {
    e.preventDefault()
    const url = process.env.REACT_APP_API_URL + 'wardrobe/'
    const opts = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(name, color, image, articleType, category, brand, quantity)
    }
    fetch(url, opts)
    .then(res => res.json())
    .then(data => console.log(data))
  }
  
  return (
    <div>

{/* ----- create new article of clothing ----- */}
      <h3>New Clothing Article</h3>

      <div className='form-field'>

        <form onSubmit={handleSubmit}>

          <label for='name' className='input'>Article Name:</label>
          <input id='name' className='input' type='text' placeholder='article name' onChange={handleChange}/>
          <label for='color' className='input'>Color:</label>
            <select id='color' className='input' name='color' onChange={handleChange}>
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
          <label for='article_type' className='input'>Type:</label>
            <select id='article_type' className='input' name='article_type' onChange={handleChange}>
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
          <label for='category' className='input'>Category:</label>
            <select id='category' className='input' name='category' onChange={handleChange}>
              <option value='1'>Loungewear</option>
              <option value='2'>Casual</option>
              <option value='3'>Formal</option>
              <option value='4'>Party</option>
              <option value='5'>Work</option>
            </select>
          <label for='brand' className='input'>Brand:</label>
          <input id='brand' className='input' type='text' placeholder='brand' onChange={handleChange}/>
          <label for='brand' className='input'>Photo:</label>
          <input id='image' className='input' type='file' name='image' onChange={handleChange}/>
          <label for='quantity' className='input'>Quantity:</label>
          <input id='quantity' className='input' type='number' name='quantity' onChange={handleChange}></input>
          <button type='submit' className='input'>Add Item</button>

        </form>

      </div>


    </div>
  )
}

export default NewWardrobeItem