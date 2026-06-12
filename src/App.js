import React from 'react';
import Achievements from './components/Achievements';
// import Navbar from './components/Navbar';
import Navbar1 from './components/Navbar1';
import Video from './components/Video';
import Campaigns from './components/Campaigns';
import Develop from './components/Develop';
import About from './components/About';
function App() {
  return (
    <div className="">
      {/* < Navbar/>  */}
     < Navbar1/>
      < Video/>
      < Campaigns/> 
     < Develop/> 
     < About/>
      < Achievements/>
    </div>
  );
}

export default App;
