import React, { useState } from 'react'
import menu from '../../assets/icono-menu.svg'

const Menu = () => {

  const [sidebar, setSidebar] = useState(false)
  
  const changeMenu = () =>{
    setSidebar(!sidebar)
    
  }

  return (
    <div id="icono-menu-header">
        <img src={menu} alt="icono-menu" onClick={changeMenu} />
    </div>

  )
}

export default Menu
