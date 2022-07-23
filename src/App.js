// ---- i m p o r t s ! ---- //
import { Routes, Route } from 'react-router-dom'
import { useState } from 'react'
import './App.css';

//-- component imports -- //
import Main from './components/Main';
import Header from './components/Header'
import Footer from './components/Footer';
import LogIn from './components/LogIn';
import Profile from './components/Profile';
import WardrobeList from './components/WardrobeList';
import NewWardrobeItem from './components/NewArticleForm';
import WardrobeDetail from './components/WardrobeDetail';


//------ brain dump ------
  // - retrieve wardrobe backend data via fetch ✔
  // - render wardrobe content upon user authentication -> wardrobe component
//------ end brain dump . ------



function App() {

  //--- user authentication checkpoint --- 
  // const [userLoggedIn, setUserLoggedIn] = useState(localStorage.getItem('user'))
  // const [accessToken, setAccessToken] = useState(localStorage.getItem('access_token'))

//--- fetch wardrobe data (protected) ---
  // useEffect(() => {
  //   const accessToken = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjU4NTY3Mjc0LCJpYXQiOjE2NTg1NjY5NzQsImp0aSI6IjcwMGNhNjQ0MTk0ZTQ1MzU4ODhmNjU5NzMxN2E1M2I5IiwidXNlcl9pZCI6MX0.Kug9ILabCBsCVfusiu94VUcEhQ3KaCIm5RlMnWO5mY0'
  //   const url = process.env.REACT_APP_API_URL + 'wardrobe_protected/'
  //   const opts = {
  //     method: 'GET',
  //     headers: {
  //       'Content-Type': 'application/json',
  //       'Authorization': `Bearer ${accessToken}`
  //     }
  //   }
  //   fetch(url, opts)
  //   .then(res => res.json())
  //   //--- check that auth was successful ---
  //   .then(data => console.log(data))
  // })

  return (
    <div className="App">


      <Header />
      
      {/* {userLoggedIn ? (
        <p>Welcome, {userLoggedIn}</p>
      ): null 
      } */}
      <div className='routes'>
        {/* Render routes below*/}
        <Routes>

          <Route path='/' element={<Main />} />
          <Route path='/login' element={<LogIn />} />
          {/* <Route path='/profile/:id' element={<Profile setUserLoggedIn={setUserLoggedIn} setAccessToken={setAccessToken}/>} /> */}
          <Route path='/profile/:id' element={<Profile />} />
          {/* <Route path='/wardrobelist' element={<WardrobeList accessToken={accessToken}/>} /> */}
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
