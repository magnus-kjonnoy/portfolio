import { Link, NavLink, useNavigate } from 'react-router-dom'

export default function Nav() {

  return (
    <div className='nav'>
      <NavLink to='/portfolio' className={({isActive}) => isActive ? 'nav-item nav-active' : 'nav-item'} end>Om meg</NavLink>
      <NavLink to='/portfolio/projects' className={({isActive}) => isActive ? 'nav-item nav-active' : 'nav-item'} end>Prosjekter</NavLink>
    </div>
  )
}