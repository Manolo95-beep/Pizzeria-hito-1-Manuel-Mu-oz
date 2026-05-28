const Header = () => {
  return (
      <header
      className="text-white text-center p-5"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1513104890138-7c749659a591')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <h1>Pizzería Mamma Mia!</h1>

      <p>
        ¡Tenemos las mejores pizzas que podrás encontrar!
      </p>
    </header>
  )
}

export default Header