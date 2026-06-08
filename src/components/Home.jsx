import Header from "./Header"
import CardPizza from "./CardPizza"
import pizzas from "../../pizzas"

const Home = () => {
  return (
    <>
      <Header />
      <br></br>

      <div className="d-flex flex-wrap justify-content-center gap-3 mt-4">

      {pizzas.map ((pizza) => (
        <CardPizza
          name={pizza.name}
          descripcion={pizza.desc}
          price={pizza.price}
          ingredients={pizza.ingredients}
          img={pizza.img}
        />
      ))
      }
      

      </div>
    </>
  )
}


export default Home