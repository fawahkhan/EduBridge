import React from 'react';
import Home from './Home/Home';

import { Route, Routes } from "react-router-dom";
import Service from './Service/Service';
import SignUp from './components/SignUp';


function App() {
  return(<>
  <div className="dark:bg-slate-900 dark:text-white">
 <Routes>
  <Route path="/" element={<Home/>}/>
  <Route path="/Services" element={<Service/>}/>
  <Route path="/SignUp" element={<SignUp/>}/>
  
 </Routes>
 </div>
  </>);
}

export default App;
