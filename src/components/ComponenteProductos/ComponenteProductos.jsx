import { useEffect, useState } from "react"
import { gFetch } from "../../utils/gFetch"


export const ComponenteProductos = () => {
  const [ boleano, setBoleano ] = useState(true)
  const [ productos, setProductos ] = useState([])
  const [ loading, setLoading ] = useState(true)


    useEffect(()=>{
      gFetch()
      .then(resp => setProductos(resp))
      .catch(err => console.log(err))
      .finally( ()=> setLoading(false))
    }, [])


  return (
    <>
        <section className="productos">
            { loading ?
                    <h2>Cargando...</h2>
                :
                    <div>
                        { productos.map( producto =>
                            <div key={producto.id} className="card">
                                <div className="card-header">
                                    Nombre: {producto.name}
                                </div>
                                <div className="card-body">
                                    <img src={producto.img}/>
                                </div>
                                <div className="card-footer"></div>
                            </div>
                        )}
                    </div>
            }
        </section>
    </>
  )
}
