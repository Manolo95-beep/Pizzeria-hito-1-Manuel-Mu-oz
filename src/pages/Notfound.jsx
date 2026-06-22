import { Link } from "react-router-dom"

const Notfound = () => {
  return (
    <div>
       <h1> ERROR 404 </h1>

       <h2> Pagina no encontrada </h2>

       <link to="/">
        Volver al inicio
       </link>
    </div>
  )
}

export default Notfound
