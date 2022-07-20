// ---- i m p o r t s ! ---- //
import { Routes, Route } from 'react-router-dom'
import { useEffect, useState } from 'react'
import './App.css';

//-- component imports -- //
import Main from './components/Main';
import Header from './components/Header'
import Footer from './components/Footer';
import Profile from './components/Profile';
import SplineApp from './components/Spline';
import WardrobeList from './components/WardrobeList';


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
      <Header />

      <div className='routes'>
        {/* Render routes below*/}
        <Routes>

          <Route path='/' element={<Main />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/wardrobelist' element={<WardrobeList />} />
        
        </Routes>
      </div>

      {/* Footer content below */}
      <Footer />
    </div>
  );
}

export default App;
