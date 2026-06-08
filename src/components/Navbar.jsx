
const Navbar = () => {
  const total = 25000
  const token = false
  return (
    <nav className="navbar navbar-dark bg-dark px-3 d-flex justify-content-between">
      
      <div>
        <button className="btn btn-outline-light me-2" >
          🍕 Home 
        </button>

        {token ? (
          <>
            <button className="btn btn-outline-light me-2">
              🔓 Profile
            </button>

            <button className="btn btn-outline-light" href="../Register.jsx">
              🔒 Logout
            </button>
          </>
        ) : (
          <>
            <button className="btn btn-outline-light me-2">
              🔐 Login
            </button>

            <button className="btn btn-outline-light">
              🔐 Register
            </button>
          </>

         
        )}
      </div>

      <button className="btn btn-dark btn-outline-light">
        🛒 Carrito
      </button>

      <button className="btn btn-success">
        🛒 Total: ${total.toLocaleString('es-CL')}
      </button>

    </nav>
  )
}

export default Navbar