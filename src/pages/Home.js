import React from 'react'
import Nav from "../components/Nav.js"
import Main from "../components/Main.js"
import styles from "../scss/Home.module.css"

function Home() {
  return (
    <div className={styles.home} >
        <Nav/>
        <Main/>
    </div>
  )
}

export default Home