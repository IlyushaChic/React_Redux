import React from 'react'
import Btn from './Btn/btn'
import styles from './header.module.css'
import Links from './Links/Links'
import Logo from './Logo/Logo'

const Header = () => {
   return (
      <div className={styles.body}>
         <Logo />
         <Links />
         <Btn />
      </div>
   )
}
export default Header