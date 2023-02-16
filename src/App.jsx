import NavBar from './components/NavBar/NavBar'
import './App.css'
import { ComponenteProductos } from './components/ComponenteProductos/ComponenteProductos'

function App() {

  return (
    <div className="app">
      <div>
        <a href="" target="_blank">
          <img src="/images.jpg" className="logo" alt="Vite logo" />
        </a>
      </div>
      <NavBar />
      <ComponenteProductos/>
    </div>
  )
}

export default App
