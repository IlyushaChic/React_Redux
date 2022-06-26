import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import style from './item.module.css'


const Item = ({ text, sort, remove, item, id, background, display, renderItem2 }) => {

   let [active, setActive] = useState(false)

   const onActive = () => {
      setActive(active = !active)
   }

   const dispatch = useDispatch()

   const sortItems = (event) => {
      event.stopPropagation()
      let type = sort.toUpperCase()
      dispatch({ type: type })
      renderItem2()
   }

   return (
      <div key={id} onClick={onActive} className={active ? style.body_active : style.body} style={{ background: `url(${background})0 0/100% 100%no-repeat`, display: `${display}` }} >
         {active ? <div onClick={() => remove(item)} className={style.btn_del_active}>Delete</div> : <div></div>}
         <div onClick={sortItems} className={style.btn}>{sort}</div>
         <div className={style.text}>{text}</div>
      </div>
   )
}
export default Item  