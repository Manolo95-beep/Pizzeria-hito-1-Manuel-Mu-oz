
const CardPizza = ({name,price,ingredients,img,descripcion}) => {
  return (
    <div className="card m-3" style={{ width: '18rem' }}>
      
      <img src={img} className="card-img-top" alt={name} />

      <div className="card-body">
        <h5 className="card-title">{name}</h5>

        <hr />

        <p className="text-center">
          Descripción: {descripcion}
        </p>

        <hr/>

        <p className="text-center">
          Ingredientes:
        </p>

        <ul>
          {ingredients.map((ingredient, index) => (
            <li key={index}>
              🍕 {ingredient}
            </li>
          ))}
        </ul>

        <hr />

        <h4 className="text-center">
          ${price.toLocaleString('es-CL')}
        </h4>

        <div className="d-flex justify-content-between">
          <button className="btn btn-outline-dark">
            👀 Ver más
          </button>

          <button className="btn btn-dark">
            🛒 Añadir
          </button>
        </div>
      </div>
    </div>
  )
}

export default CardPizza