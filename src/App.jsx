import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Nav from './components/Nav'
import Home from './pages/Home'
import About from './pages/About'
import Projects from './pages/Projects'
import Status404 from './pages/404'

export default function App() {
  const baseURL = '/portfolio'

  return (
    <Router>
      {/* <Nav/> */}
      <Routes>
        <Route path={`${baseURL}`} element={<Home/>}/>
        <Route path={`${baseURL}/about`} element={<About/>}/>
        <Route path={`${baseURL}/projects`} element={<Projects/>}/>
        <Route path='*' element={<Status404/>}/>
      </Routes>
    </Router>
  )
}