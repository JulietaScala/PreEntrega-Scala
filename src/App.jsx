import NavBar from './components/NavBar/NavBar'
import { ComponenteContainer } from './components/ComponenteContainer/ComponenteContainer'
import './App.css'

function App() {

  return (
    <div className="app">
      <div>
        <a href="" target="_blank">
          <img src="/images.jpg" className="logo" alt="Vite logo" />
        </a>
      </div>
      <NavBar />
    </div>
  )
}

export default App
