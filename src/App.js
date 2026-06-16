import React from 'react';
// import Achievements from './components/Achievements';
import Navbar1 from './components/Navbar1';
import { Route, Routes } from 'react-router-dom';
import Accomplishment from './components/Accomplishment';
import Landingpage from './components/Landingpage';
import Achievements from './components/Achievements';
import Contact from './components/Contact';
import About from './components/About';

function App() {
  return (
    <div className="">
     < Navbar1/>
     <Routes>
      <Route path='/about' element={<About/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/accomplishment' element={<Accomplishment/>}/>
      <Route path='/landingpage' element={<Landingpage/>}/>
      <Route path='/achievements' element={<Achievements/>}/>
     </Routes>
    </div>
  );
}

export default App;
