import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="d-flex flex-column justify-content-center align-items-center text-center vh-100 bg-dark text-white">

      <div className="display-1 fw-bold text-warning">
        404
      </div>

      <h2 className="mb-3">
        🍕 Ups! Esta pizza no existe
      </h2>

      <p className="mb-4 text-secondary">
        La pagina de esta pizza desaparecio, o quizas la robaron por ser las mejores.
      </p>

      <Link to="/" className="btn btn-warning btn-lg">
        🏠 Volver al Home
      </Link>

    </div>
  );
};

export default NotFound;