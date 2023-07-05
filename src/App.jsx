
import './App.css'
import Hero from './components/hero/hero'
import Navbar from './components/navbar/navbar'

function App() {

  return (
    <main>
      <div className='main'>
        <div className='gradient'/>
      </div>
      <div className='app'>
        <Navbar />
        <Hero />
      </div>
    </main>
  )
}

export default App
