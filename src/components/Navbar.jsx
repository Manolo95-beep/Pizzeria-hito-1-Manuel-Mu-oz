
const Navbar = () => {
  const total = 25000
  const token = false
  return (
    <nav className="navbar navbar-dark bg-dark px-3 d-flex justify-content-between">
      
      <div>
        <button className="btn btn-outline-light me-2" >
          <link to="/"> 🍕 Home </link> 
        </button>

        {token ? (
          <>
            <button className="btn btn-outline-light me-2">
              <link to="/profile"> 🔓 Profile </link> 
            </button>

            <button className="btn btn-outline-light" href="../Register.jsx">
              🔒 Logout
            </button>
          </>
        ) : (
          <>
            <button className="btn btn-outline-light me-2">
            <link to="/login"> 🔒 Login </link> 

            </button>

            <button className="btn btn-outline-light">
            <link to="/register"> 🔐 Register </link> 
            </button>
          </>

         
        )}
      </div>

      <button className="btn btn-dark btn-outline-light">
       <link to="/cart"> 🛒 Carrito </link>  
      </button>

      <button className="btn btn-success">
        🛒 Total: ${total.toLocaleString('es-CL')}
      </button>

    </nav>
  )
}

export default Navbar