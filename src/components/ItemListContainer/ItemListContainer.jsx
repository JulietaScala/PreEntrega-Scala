import { useEffect, useState } from "react"
import { gFetch } from "../../utils/gFetch"
import './ItemListContainer.css' 

export const ItemListContainer = ( {greeting} ) => {
  const [ boleano, setBoleano ] = useState(true)
  const [ productos, setProductos ] = useState([])
  const [ loading, setLoading ] = useState(true)


    useEffect(()=>{
      gFetch()
      .then(resp => setProductos(resp))
      .catch(err => console.log(err))
      .finally( ()=> setLoading(false))


      /* const url = "https://pokeapi.co/api/v2/ability/?limit=10"
      fetch(url, {
        method: "POST",
        headers: {
            "content-type": "aplication/json"
        },
        body: JSON.stringify({
        })
      })
      .then(rsp => rsp.json()) 
      .then(rsp => console.log(rsp))
      .catch(error => console.log(error)); */
    }, [])


  return (
    <>
        <section className="productos">
            { loading ?
                    <h2>Cargando...</h2>
                :
                <>
                    <h2>{greeting}</h2>
                    <div className="itemListContainer">
                    { productos.map( producto => (
                        <div key={producto.id} className="card w-25 mt-3">
                          <div className="card-header">
                            Nombre: {producto.name}
                          </div>
                          <div className="card-body">
                            <img className="w-100" src={producto.foto}/>
                            <br />
                            <label>Categoría: {producto.categoria}</label>
                            <label>Precio: {producto.precio}</label>
                            <label>Stock: {producto.stock}</label>
                          </div>
                          <div className="card-footer">
                            <button className="btn btn-outline-dark w-100">Detalle...</button>
                          </div>
                        </div>
                      ))
                    }
                    </div>
                </>
            }
        </section>
    </>
  )
}
