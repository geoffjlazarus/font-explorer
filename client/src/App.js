import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import TypeViewer from './views/TypeViewer';
import FontPairs from './views/FontPairs';
import Header from './views/Header';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        
        <Routes>
          <Route path="/" element={
            <>
              <div className='link-card'>
                <Link to="/typeviewer"><h2>Font Sampler</h2></Link>
                <p>Explore 5 random fonts, and click into one for controls to manipulate the typeface</p>
              </div>
            </>
          } />

          <Route path="/typeviewer" element={<TypeViewer />} />
        </Routes>


        <Routes>
          <Route path="/" element={
            <>
              <div className='link-card'>
                <Link to="/fontpairs"><h2>Font Pairs</h2></Link>
                <p>Explore 5 random font pairs, and click into one for controls to manipulate the typeface</p>
              </div> 
            </>
          } />

          <Route path="/fontpairs" element={<FontPairs />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
