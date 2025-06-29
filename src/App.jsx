import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import Status404 from './pages/404'

export default function App() {

  return (
    <Router>
      <Routes>
        <Route path='/portfolio' element={<Home/>}/>
        <Route path='*' element={<Status404/>}/>
      </Routes>
    </Router>
  )
}