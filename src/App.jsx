import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Header from './components/Header'

import Home from './pages/Home'
import Projects from './pages/Projects'
import Status404 from './pages/404'

export default function App() {

  return (
    <Router>
      <Header/>
      <Routes>
        <Route path='/portfolio' element={<Home/>}/>
        <Route path='/portfolio/projects' element={<Projects/>}/>
        <Route path='*' element={<Status404/>}/>
      </Routes>
    </Router>
  )
}