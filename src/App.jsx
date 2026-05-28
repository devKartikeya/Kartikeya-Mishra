import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={
          <Home/>
        } />
         <Route path='/home' element={
          <Home/>
        } />
        <Route path='/contact' element={<h1>Contact</h1>} />
      </Routes>
    </div>
  )
}

export default App