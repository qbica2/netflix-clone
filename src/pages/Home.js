import React from 'react'
import Nav from "../components/Nav.js"
import styles from "../scss/Home.module.css"

function Home() {
  return (
    <div className={styles.home} >
        <Nav/>
    </div>
  )
}

export default Home