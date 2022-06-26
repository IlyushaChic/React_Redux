import React from 'react'
import style from './sort.module.css'
import { ALL, BRANDING, DESIGN, ILLUSTRATION, MOTION } from '../../../redux/types'
import SortButton from './sortButton/sortButton'

const Sort = ({ render }) => {

   const sortButtons = [
      { id: Math.random(), type: ALL, text: 'Show All', },
      { id: Math.random(), type: DESIGN, text: 'Design', },
      { id: Math.random(), type: BRANDING, text: 'Branding', },
      { id: Math.random(), type: ILLUSTRATION, text: 'Ilustration', },
      { id: Math.random(), type: MOTION, text: 'Motion', }
   ]

   return (
      <div className={style.body}>
         {sortButtons.map((i) =>
            <SortButton
               render={render}
               className={style.item}
               key={i.id}
               type={i.type}
               text={i.text} />
         )}
      </div>
   )
}
export default Sort