
const Buscador = () => {
    const styles = {
        width:'130%'
    }
  return (
    <section>
        <form>
            <input style={styles} type="text" placeholder='Buscar productos, marcas y más...'/>
        </form>
    </section>
  )
}

export default Buscador