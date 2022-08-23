import React from 'react'

import { Route, Routes } from 'react-router-dom';

import { Header, Home } from "./components/indexPack";
import Cart from './components/pages/Cart';

function App() {

   return (
      <div className="wrapper">
         <Header />
         <div className="content">
            <Routes>
               <Route path="/" element={<Home />} exact />
               <Route path="/cart" element={<Cart/>}/>
            </Routes>
         </div>
      </div>
   );
}

export default App;
