import './App.css';
import './css-styles.css'
import Navbar from './navbar';
import About from './about';
import React,{useState,useEffect} from 'react';
import { BrowserRouter , Route,Routes} from 'react-router-dom';
import Work from './workExperience';
import Profile from './profile';
import Projects from './projects';

function App() {
  const [title, setTitle] = useState(" Abhi | Portfolio");

  useEffect(() => {
    // This will run when the page first loads and whenever the title changes
    document.title = title;
  }, [title]);
  return (
    <div className='mainApp'>
      <div className="App">
        <BrowserRouter basename={process.env.PUBLIC_URL}>
            <Routes>
              <Route path='/' element={<Profile/>}/>
              <Route path='/workexperience' element={<Work />}/>
              <Route path='/projects' element={<Projects />} />
              <Route path='/about' element={<About/>} />
            </Routes>
            <Navbar />
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
