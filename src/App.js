import React  from 'react'

import { Route, Routes } from 'react-router-dom';
import axios from "axios";
import { useDispatch } from 'react-redux';

import { Header, Home } from "./components/indexPack";
import { Cart } from "./components/pages/Cart";

import { setPizzas as setPizzas } from "./action/pizzas"


function App() {
   const dispatch = useDispatch();

   React.useEffect(() => {
      axios.get('http://localhost:3000/db.json').then(({ data }) => {
         dispatch(setPizzas(data.pizzas));
      });
   }, []);

   return (
      <div className="wrapper">
         <Header />
         <div className="content">
            <Routes>
               <Route path="/" element={<Home />} exact />
               <Route path="/cart" element={<Cart />} />
            </Routes>
         </div>
      </div>
   )
}

export default App;

// export default connect(
//    (state) => {
//       return {
//          items: state.pizzas.items,
//          filters: state.filters,
//       };
//    },
//    (dispatch) => {
//       return {
//          setPizzas: (items) => dispatch(setPizzas(items)),
//       };
//    },

// )(App);