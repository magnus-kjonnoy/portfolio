import { Link, NavLink, useNavigate } from 'react-router-dom'

export default function Nav() {

  return(
    <div className='nav'>
      <NavLink
        className='nav-item'
        to='/portfolio'
      >
        Home
      </NavLink>
      <hr className='nav-divider'/>
      <NavLink
        className='nav-item'
        to='/portfolio/about'
      >
        About
      </NavLink>
      <hr className='nav-divider'/>
      <NavLink
        className='nav-item'
        to='/portfolio/projects'
      >
        Projects
      </NavLink>
    </div>
  )
}