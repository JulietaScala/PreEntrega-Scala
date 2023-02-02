import NavBar from './components/NavBar/NavBar'
import { ComponenteContainer } from './components/ComponenteContainer/ComponenteContainer'
import './App.css'

function App() {

  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/images.jpg" className="logo" alt="Vite logo" />
        </a>
      </div>
      <h1>Padel Shop</h1>
      <NavBar />
      <ComponenteContainer />
    </div>
  )
}

export default App
