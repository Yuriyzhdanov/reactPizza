import React from 'react'

import LoadingBlock from '../PizzaBlock/LoadingBlock.jsx'

import { Categories, SortPopup, } from "../indexPack.js";
import PizzaBlock from '../PizzaBlock/PizzaBlock.jsx';
import { setCategory } from '../../redux/action/filters.js';
import { fetchPizzas } from "../../redux/action/pizzas"
import { setSortBy } from '../../redux/action/filters'
import { useSelector, useDispatch } from 'react-redux';


const categoryNames = ['Meat', 'Vegetarian', 'Grill', 'Spicy', 'Calzone'];
const sortItems = [
   { name: 'popular', type: 'popular', order: 'desc' },
   { name: 'price', type: 'price', order: 'desc' },
   { name: 'a-z', type: 'name', order: 'asc' },
];


function Home() {
   const dispatch = useDispatch();
   const items = useSelector(({ pizzas }) => pizzas.items);
   const cartItems = useSelector(({ cart }) => cart.items);
   const isLoaded = useSelector(({ pizzas }) => pizzas.isLoaded);
   const { category, sortBy } = useSelector(({ filters }) => filters);



   React.useEffect(() => {
      dispatch(fetchPizzas(sortBy, category));
   }, [category, sortBy]);

   const onSelectCategory = React.useCallback((index) => {
      dispatch(setCategory(index));
   }, []);

   const onSelectSortType = React.useCallback((type) => {
      dispatch(setSortBy(type));
   }, []);

   const handleAddPizzaToCart = (obj) => {
      dispatch({
         type: 'ADD_PIZZA_CART',
         payload: obj,
      });
   };

   return (
      <div className="container">
         <div className="content__top">
            <Categories
               activeCategory={category}
               onClickCategory={onSelectCategory}
               items={categoryNames}
            />
            <SortPopup
               activeSortType={sortBy.type}
               items={sortItems}
               onClickSortType={onSelectSortType}
            />
         </div>
         <h2 className="content__title">All pizzas</h2>
         <div className="content__items">
            {isLoaded
               ? items.map((obj) => (
                  <PizzaBlock
                     onClickAddPizza={handleAddPizzaToCart}
                     key={obj.id}
                     addedCount={cartItems[obj.id] && cartItems[obj.id].items.length}
                     {...obj}

                  />
               ))
               : Array(12)
                  .fill(0)
                  .map((_, index) => <LoadingBlock key={index} />)}
         </div>
      </div>
   );
}
export default Home;