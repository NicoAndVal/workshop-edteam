import React, { createRef } from 'react'
import { NavLink } from 'react-router-dom'
import PrivateMenu from '../Molecules/PrivateMenu'
import PublicMenu from '../Molecules/PublicMenu'


const menu = createRef()
const toogleMenu = () => menu.current.classList.toggle('show')



const Header = () =>(
  <header className='main-header'>
    <div className='ed-grid s-grid-5 l-grid-4 s-cross-center'>
      <div className = 's-cols-4 lg-cols-1'>
        <NavLink to='/'>
        <img src='https://ed.team/static/images/logo-premium.svg'alt='EDLogo' className='main-logo'/>
        </NavLink>
      </div>
      <div className= 's-cols-1 lg-cols-3 s-cross-center s-main-end' >
        <nav className='main-menu' ref={menu}>
          {localStorage.getItem('token')?
          <PrivateMenu/>:
          <PublicMenu/>
        }
        </nav>

        <div 
          className='main-menu-toggle to-l'
          onClick ={() =>toogleMenu()}
        >

        </div>

      </div>
    </div>
  </header>
)


export default Header
