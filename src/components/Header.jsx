import React from 'react'
import { Link } from 'react-router-dom'

import pizzalogo from "../assets/img/pizza-logo.svg"
import { Button } from './Button'



export const Header = () => {
   return (
      <div className="header">
         <div className="container">
            <Link to='/'>
               <div className="header__logo">
                  <img width="38" src={pizzalogo} alt="Pizza logo" />
                  <div>
                     <h1>React Pizza</h1>
                     <p>The most delicious pizza you have to try</p>
                  </div>
               </div>
            </Link>

            <Link to='/cart'>
               <div className="header__cart">
                  <Button/>
               </div>

            </Link>

         </div>
      </div>
   )
}
