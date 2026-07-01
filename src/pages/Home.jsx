

import Header from "../components/Header"
import CardPizza from "../components/CardPizza"

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
            pizza = {pizza}
         />
       ))}
      </div>

    </>
  )
}


export default Home