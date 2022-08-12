import React from 'react'

import { Categories, SortPopup } from "../indexPack.js";
import { PizzaBlock } from '../PizzaBlock.jsx';

import { useSelector } from 'react-redux';

function Home() {
   const { items } = useSelector(({ pizzas, filters }) => {
      return {
         items: pizzas.items,
      };
   });

   return (
      <div className="container">
         <div className="content__top">
            <Categories onClickItem={(name) => (console.log(name))} items={[
               "Meat",
               "Vegetarian",
               "Grill",
               "Spicy",
               "Closed",
            ]} />
            <SortPopup items={[
               { name: 'popular', type: 'popular' },
               { name: 'price', type: 'price' },
               { name: 'a-z', type: 'alphabet' },]} />
         </div>
         <h2 className="content__title"> All pizzas</h2>
         <div className="content__items">
            {items && items.map((obj) => (
               <PizzaBlock key={obj.id} {...obj} />))}
         </div>
      </div>
   )
}
export default Home;