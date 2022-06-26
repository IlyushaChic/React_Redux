import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import style from './sortButton.module.css'


const SortButton = ({ text, type, render }) => {

   const dispatch = useDispatch();

   const handleClick = () => {
      dispatch({ type: type })
      render()
   }

   return (
      <div key={Math.random()}
         className={style.item}
         onClick={handleClick}
      >
         {text}
      </div >
   )
}
export default SortButton