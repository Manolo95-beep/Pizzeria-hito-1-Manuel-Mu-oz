import Header from "./Header"
import CardPizza from "./CardPizza"

import { useEffect, useState } from "react"

const Home = () => {

  useEffect(() => {
    const getPizzas = async () => {
      const response = await fetch ("http://localhost:5000/api/pizzas")
      const data = await response.json ();
      setPizzas(data);
    }

    getPizzas();
  }, []);

  const [pizzas, setPizzas] = useState([])
  return (
    <>

      <div className="row">
        {pizzas.map((pizza) => (
          <CardPizza
            key={pizza.id}
            descripcion={pizza.desc}
            name={pizza.name}
            price={pizza.price}
            ingredients={pizza.ingredients}
            img={pizza.img}
         />
       ))}
      </div>

    </>
  )
}


export default Home