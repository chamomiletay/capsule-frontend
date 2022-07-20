// ---- i m p o r t s ! ---- //
import { Routes, Route } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import './App.css';

//-- component imports -- //
import Main from './components/Main';
import Header from './components/Header'
import Footer from './components/Footer';
import LogIn from './components/LogIn';
import Profile from './components/Profile';
import SplineApp from './components/Spline';
import WardrobeList from './components/WardrobeList';
import NewWardrobeItem from './components/NewWardrobeItem';
import WardrobeDetail from './components/WardrobeDetail';


//------ brain dump ------
  // - retrieve wardrobe backend data via fetch ✔
  // - render wardrobe content upon user authentication -> wardrobe component
//------ end brain dump . ------



function App() {

  //--- user authentication checkpoint --- 
  const [userLoggedIn, setUserLoggedIn] = useState(localStorage.getItem('user'))
  const [accessToken, setAccessToken] = useState(localStorage.getItem('access_token'))

//--- fetch wardrobe data (protected) ---
  useEffect(() => {
    const accessToken = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjU4MjY3MTUwLCJpYXQiOjE2NTgyNjY4NTAsImp0aSI6IjcyMzkzNDcwYWNhODQyOGFiNWExMzg5MzY2ZmIxZjBiIiwidXNlcl9pZCI6MX0.MPSyPjoBmtl3ZZOWdjJ3XRA26wzVHsGB8aKMXuzStQw'
    const url = process.env.REACT_APP_API_URL + 'wardrobe_protected/'
    const opts = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${accessToken}`
      }
    }
    fetch(url, opts)
    .then(res => res.json())
    //--- check that auth was successful ---
    .then(data => console.log(data))
  })

  return (
    <div className="App">

      {/* Header content below */}
      {/* <div className='p-4 max-w-none mx-auto bg-blue-100 shadow-md flex items-center space-x-4'>
      <h1 className='text-3xl font-medium text-black font-edu-vic-wa-nt-beginner'>Capsule .</h1> */}

      {/* Header Links */}
      
      {/* </div> */}

      <Header />

      <div className='routes'>
        {/* Render routes below*/}
        <Routes>

          <Route path='/' element={<Main />} />
          <Route path='/login' element={<LogIn />} />
          <Route path='/profile/:id' element={<Profile />} />
          <Route path='/wardrobelist' element={<WardrobeList />} />
          <Route path='/newarticle' element={<NewWardrobeItem />} />
          <Route path='/articledetail/:id' element={<WardrobeDetail />} />
        
        
        </Routes>
      </div>

      {/* Footer content below */}
      <Footer />
    </div>
  );
}

export default App;
