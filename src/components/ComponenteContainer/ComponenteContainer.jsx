import Buscador from "../Buscador/Buscador"
import Titulo from "../Titulo/Titulo"

export const ComponenteContainer = () => {
    let count = 0
    let titulo = 'Soy titulo de app'
  return (
    <>
        <Titulo titulo={titulo} subtitulo='Soy sub de app'/>

        <Buscador />
    </>
  )
}