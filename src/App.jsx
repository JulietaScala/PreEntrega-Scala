import NavBar from './components/NavBar/NavBar'
// import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer'

function App() {

  return (
    <div className="app">
      <div className='menu'>
        <NavBar />
      </div>
      <ItemListContainer greeting='Hola soy componente ItemListContainer' />
      {/* <ItemCount initial={1} stock={10} onAdd={onAdd} /> */}
    </div>
  )
}

export default App
