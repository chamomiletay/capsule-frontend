// ---- i m p o r t s ! ---- //
import { Routes, Route } from 'react-router-dom'
import { useState, useEffect } from 'react'
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
import RandomOutfit from './components/RandomOutfit';
import EditArticle from './components/EditArticle';
import MyOutfits from './components/MyOutfits';
import CreateOutfit from './components/CreateOutfit'
import OutfitDetail from './components/OutfitDetail';


//------ brain dump ------
  // - retrieve wardrobe backend data via fetch ✔
  // - render wardrobe content upon user authentication -> wardrobe component
//------ end brain dump . ------



function App() {

  //--- user authentication checkpoint --- 
  const [userLoggedIn, setUserLoggedIn] = useState(null)
  const [accessToken, setAccessToken] = useState(null)

//--- fetch wardrobe data (protected) ---
  useEffect(() => {
    const accessToken = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjU5MjAxNTQxLCJpYXQiOjE2NTkyMDEyNDEsImp0aSI6IjA4ZGZmMjRiZTdiMDQzMmM5Y2M1ZGNmOTJiYTU1MjNiIiwidXNlcl9pZCI6MX0.VPVv0A_q8DG-faZ_C7Ss5tUE9r6xRfOTCWgXo-MNpDQ'
    const url = process.env.REACT_APP_API_URL + 'wardrobe_protected/'
    // const url = 'https://capsule-capstone.herokuapp.com/wardrobe_protected/'
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


      <Header userLoggedIn={userLoggedIn}/>
      
      <div className='routes'>
        {/* Render routes below*/}
        <Routes>

          <Route path='/' element={<Main />} />

          <Route path='/login' element={<LogIn setUserLoggedIn={setUserLoggedIn} setAccessToken={setAccessToken} userLoggedIn={userLoggedIn}/>} />

          {/* <Route path='/profile/:id' element={<Profile setUserLoggedIn={setUserLoggedIn} setAccessToken={setAccessToken}/>} /> */}

          <Route path='/profile/:id' element={<Profile userLoggedIn={userLoggedIn}/>} />

          <Route path='/wardrobelist' element={userLoggedIn ? <WardrobeList userLoggedIn={userLoggedIn} accessToken={accessToken}/> : <p>Oops! Sign in to access your wardrobe!</p>} />

          {/* <Route path='/wardrobelist' element={<WardrobeList />} /> */}

          <Route path='/newarticle' element={<NewWardrobeItem />} />

          <Route path='/articledetail/:id' element={<WardrobeDetail />} />

          <Route path='/edit_article/:id' element={<EditArticle userLoggedIn={userLoggedIn}/>} />

          <Route path='/generated_outfit' element={<RandomOutfit />} />

          <Route path='/my_outfits' element={userLoggedIn ? <MyOutfits userLoggedIn={userLoggedIn} accessToken={accessToken}/> : <p>Oops! Sign in to access your wardrobe!</p>} />

          <Route path='/create_outfit' element={<CreateOutfit />} />

          <Route path='/favoritedetail/:id' element={<OutfitDetail />} />
        
        
        </Routes>
      </div>

      {/* Footer content below */}
      <Footer />
    </div>
  );
}

export default App;
