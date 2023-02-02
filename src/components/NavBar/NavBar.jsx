import CartWidget from "../CartWidget/CartWidget"
import { ComponenteContainer } from "../ComponenteContainer/ComponenteContainer"
import Titulo from "../Titulo/Titulo"

function NavBar() {

    return (
        <nav>
            <Titulo titulo='Paletas' />
            <Titulo titulo='Indumentaria' />
            <Titulo titulo='Accesorios' />
            <Titulo titulo='Marcas' />
            <ComponenteContainer />
            <CartWidget />            
        </nav>
    )
  }

  export default NavBar