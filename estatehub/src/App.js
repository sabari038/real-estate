import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import HomePage from './HomePage.js';
import RealEstateSignin from './RealEstateSignin.js';
import RealEstateSignup from './RealEstateSignup.js';

const App = () => {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path='/login' element={<RealEstateSignin/>} />
          <Route path='/signup' element={<RealEstateSignup/>} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
