import React from 'react'
import navStyles from "../styles/navbar.module.css"

const navbar = () => {
  return (
    <div className={navStyles.container}>
        <div className={navStyles.left_menu}>
            <h2>Raj</h2>
        </div>
        <div className={navStyles.right_menu}>
            <h2>About</h2>
            <h2>Projects</h2>
            <h2>Resume</h2>
        </div>

    </div>
  )
}

export default navbar