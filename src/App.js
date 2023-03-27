import Navbar from './component/Navbar';
import './App.css';
import TextForm from './component/TextForm';
import About from './component/About';
import React,{ useState } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
 
} from "react-router-dom";


function App() {

   const [mode,setMode]=useState('light');


   const toggleMode=()=>{

     if(mode==='dark')
    { setMode('light');
      document.body.style.background="white"
    }
     else
     {setMode('dark');
     document.body.style.background="#042743"
    }
   }


  return (
  <>
  
   

    <Router>
      <Navbar title="TextUtils" mode={mode}  toggleMode={toggleMode}/>
        <Routes>
          <Route exact path="/" element={<TextForm heading="Enter your text" mode={mode}/>}/>
          <Route exact path="/about" element={<About />}/>
        </Routes>
    
    </Router>
  </>
  );
}

export default App;
// <Router>
   /*   
    
<Routes>
<Navbar title="TextUtils" mode={mode}  toggleMode={toggleMode}/>
      <Route path="/">
            <TextForm heading="Enter your text" mode={mode}/>
      </Route>
      <Route path="/about">
            <About />
      </Route>
</Routes>
</Router>
*/