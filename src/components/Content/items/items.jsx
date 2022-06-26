import React from 'react'
import { useState } from 'react'
import Item from './item/item'
import style from './items.module.css'
import { defaultState } from '../../../index'

export default function Items({ render, renderItem, render2, renderItem2 }) {

   const [items, setItem] = useState(defaultState);
   const removeItem = (item) => {
      setItem(items.filter(i => i.id !== item.id))
   };

   let render1 = render;
   let renderItem1 = renderItem;
   let render12 = render2;

   return (
      <div className={style.body} >
         {items.map((item) =>
            <Item id={item.id}
               key={Math.random()}
               display={item.display}
               background={item.background}
               remove={removeItem}
               item={item}
               text={item.text}
               sort={item.sort}
               renderItem2={renderItem2}
            />
         )}
      </div>
   )
}



