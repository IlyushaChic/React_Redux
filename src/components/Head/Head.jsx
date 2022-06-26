import React from 'react'
import styles from './head.module.css';
import HeadBody from './HeadBody/HeadBody';
import Header from './Header/Header';

const Head = () => {
  return (
    <div className={styles.body}>
      <Header />
      <HeadBody />
    </div>
  )
}
export default Head