import React from 'react'
import style from './links.module.css'

const Links = () => {
   return (
      <div className={style.body} >
         <div className={style.item}>About</div>
         <div className={style.item}>Services</div>
         <div className={style.item}>Pricing</div>
         <div className={style.item}>Blog</div>
      </div>
   )
}
export default Links