
import './App.css'
import Hero from './components/hero/hero'
import Navbar from './components/navbar/navbar'
import { BrowserRouter as Router } from "react-router-dom";

function App() {

  return (
    <Router>
      <div className='Router'>
        <div className='gradient'/>
      </div>
      <div className='app'>
        <Navbar />
        <Hero />
      </div>
    </Router>
  )
}

export default App
