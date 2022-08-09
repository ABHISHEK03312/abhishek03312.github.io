import './App.css';
import './css-styles.css'
import Navbar from './navbar';
import About from './about';
import { BrowserRouter as Router, Route,Routes} from 'react-router-dom';
import Work from './workExperience';
import Profile from './profile';
import Projects from './projects';

function App() {
  return (
    <div className='mainApp'>
      <div className="App">
        <Router basename={process.env.PUBLIC_URL}>
            <Routes>
              <Route path='/' element={<Profile/>}/>
              <Route path='/workexperience' element={<Work />}/>
              <Route path='/projects' element={<Projects />} />
              <Route path='/about' element={<About/>} />
            </Routes>
            <Navbar />
        </Router>
      </div>
    </div>
  );
}

export default App;
