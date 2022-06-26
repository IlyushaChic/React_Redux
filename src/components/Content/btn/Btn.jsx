import React, { useState } from 'react'
import { defaultState } from '../../../index'
import style from './Btn.module.css'

const Btn = ({ renderItem }) => {

   const addItem = () => {

      let loadingItems = JSON.parse(JSON.stringify(defaultState));
      loadingItems.forEach(el => el.text = el.text + 2)
      loadingItems.forEach(el => el.id = el.id + 9)

      if (loadingItems.length > 9) {
         return
      }

      defaultState.push(...loadingItems)
      renderItem()
   }

   return (
      <div onClick={addItem} className={style.body}>
         <div className={style.btn}>Load more</div>
      </div>
   )
}
export default Btn