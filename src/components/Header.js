import React from 'react'
import styles from '../styles/Header.module.css'

function Header() {
    const headerStyle = {
        padding: '20px 0',
        lineHeight: '1.5em',
        color: '#aeadad',
        textAlign: 'center',
      };
  return (
    <div style={headerStyle} className={styles.header}>
        <h1>Todos</h1>
        <p>Items will persist in the item local storage</p>
    </div>
  )
}

export default Header;