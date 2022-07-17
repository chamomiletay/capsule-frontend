import { Routes, Route } from 'react-router-dom'
import Main from './components/Main';
import Header from './components/Header'
import Footer from './components/Footer';
import Profile from './components/Profile';
import './App.css';
import SplineApp from './components/Spline';
import WardrobeList from './components/WardrobeList';


function App() {
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
