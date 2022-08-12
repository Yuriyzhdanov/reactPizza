import React, { useState } from 'react'


export const Categories = ({ items, onClickItem }) => {
   const [activeItem, setActiveItem] = React.useState(null);

   const onSelectItem = (index) => {
      setActiveItem(index);
   };

   return (
      <div className="categories">
         <ul>
            <li
               className={activeItem === null ? "active" : ""}
               onClick={() => onSelectItem(null)}
            > All </li>
            {items &&
               items.map((name, index) => (
                  <li
                     className={activeItem === index ? "active" : " "}
                     onClick={() => onSelectItem(index)}
                     key={`${name}_${index}`}>
                     {name}</li>))}
         </ul>
      </div>
   )
}
