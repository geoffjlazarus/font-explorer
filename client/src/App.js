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
                Click here to view the type viewer: 
                <Link to="/typeviewer">Here</Link>
              </div>
            </>
          } />

          <Route path="/typeviewer" element={<TypeViewer />} />
        </Routes>


        <Routes>
          <Route path="/" element={
            <>
              <div className='link-card'>
                Click here to view the font pairs: 
                <Link to="/fontpairs">Here</Link>
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
