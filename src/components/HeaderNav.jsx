import { Link, NavLink, useNavigate } from 'react-router-dom'

export default function HeaderNav() {

  return (
    <div className='header-nav'>
      <NavLink to='/portfolio' className={({isActive}) => isActive ? 'header-nav-item header-nav-active' : 'header-nav-item'} end>Om meg</NavLink>
      <NavLink to='/portfolio/projects' className={({isActive}) => isActive ? 'header-nav-item header-nav-active' : 'header-nav-item'} end>Prosjekter</NavLink>
    </div>
  )
}