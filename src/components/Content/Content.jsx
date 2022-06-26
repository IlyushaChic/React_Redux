import React, { useState } from 'react'
import Btn from './btn/Btn';
import styles from './content.module.css';
import Items from './items/items';
import Sort from './sort/Sort';

const Content = () => {

   let [render, setRender] = useState(false);
   const toggleRender = () => {
      setRender(render = !render)
   }

   let [renderItem, setRenderItem] = useState(false);
   const toggleRenderItem = () => {
      setRenderItem(renderItem = !renderItem)
   }

   let [renderItem2, setRenderItem2] = useState(false);
   const toggleRenderItem2 = () => {
      setRenderItem2(renderItem2 = !renderItem2)
   }

   return (
      <div className={styles.background}>
         <Sort render={toggleRender} />
         <Items render={render} renderItem={renderItem} render2={renderItem2} renderItem2={toggleRenderItem2} />
         <Btn renderItem={toggleRenderItem} />
      </div>
   )
}


export default Content