import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './styles/index.css';
import Error from './components/Error';
import Home from './pages/Home';
import Services from './pages/Services';
import Boutique from './pages/Boutique';
import Faq from './pages/Faq';
import Contact from './pages/Contact';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path='*' element={<Error />}></Route>
        
        <Route path='/' element={<Home />}></Route>
        <Route path='/services' element={<Services />}></Route>
        <Route path='/boutique' element={<Boutique />}></Route>
        <Route path='/faq' element={<Faq />}></Route>
        <Route path='/contact' element={<Contact />}></Route>
      </Routes>
    </Router>
  </React.StrictMode>
);
