// ----- i m p o r t s ! -----
import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import './Main.css'

//----- brain dump -----
    //-
//----- end brain dump . -----

const RandomOutfitForm = ({accessToken}) => {

  const navigate = useNavigate()
  let {id} = useParams()

//----- define form data ! -----
  // const [formData, setFormData] = useState({
  //   user:'base_user',
  //   name:'',
  //   color:'',
  //   article_type:'',
  //   category:'',
  //   brand:'',
  //   quantity:''
  // })

  // const [image, setImage] = useState({image: ''})

// const handleChange = (e) => {
//   setFormData({...formData, [e.target.id]: e.target.value})
//   console.log(e.target.id, e.target.value)
//   // setImage({image: e.target.files[0]})
// }

//----- handle form submission -----
  const handleSubmit = (e) => {
    e.preventDefault()

  //--- redirect upon submit ---
    navigate(`/generated_outfit/`)
  }
  
  return (
    <div className='m-10'>

  {/* ----- create new article of clothing ----- */}
      <h3 className='font-edu-vic-wa-nt-beginner text-3xl'>Outfit Generator</h3>

      <div className='justify-center items-center bg-plants max-w-none m-5 max-h-500 py-8 border-double border-4 border-slate-500 rounded shadow-md'>

        <form onSubmit={handleSubmit}>

          <button type='submit' className='flex justify-center justify-items-center m-auto p-2 font-nanum-gothic bg-blue-100 shadow-md rounded border-solid border-2 border-blue-500 font-bold text-slate-700'>Save Outfit</button>

        </form>

      </div>


    </div>
  )
}

export default RandomOutfitForm