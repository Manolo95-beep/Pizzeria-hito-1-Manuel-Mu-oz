
import { pizzaCart } from "../../pizzas"
import { useState } from "react"

const Cart = () => {
    
    const[carro, setCarro] = useState(pizzaCart)

    const aumentarCantidad = (id) =>{
        const actualizarCarro = carro.map((pizza) =>{

            if (pizza.id === id){
                return {
                    ...pizza,
                    count: pizza.count + 1
                
                };
            }
            return pizza;
        })

        setCarro(actualizarCarro)
    }

    const disminuirCantidad = (id) =>{
        const actualizarCarro = carro.map((pizza)=>{
            if (pizza.id === id){
                return {
                    ...pizza,
                    count: pizza.count - 1
                };
            }

                return pizza;
            })
            .filter((pizza) => pizza.count > 0)
        setCarro(actualizarCarro);
    }

    const total = carro.reduce((acc,pizza)=>{
        return acc + pizza.price * pizza.count}, 0);
    
  return (
    <>

    <h1> Carrito de compras </h1>
      {
        carro.map((pizza) =>
            <div 
            key={pizza.id}
            style={{
                display:"flex",
                alignItems:"center",
                gap:"20px",
                marginBottom:"20px",
                borderBottom:"1px solid gray",
                paddingBottom:"10px"
            }}>

                <img 
                src = {pizza.img} 
                alt={pizza.name} 
                width="100"/>

                <h3>{pizza.name}</h3>

                <p> Precio: ${pizza.price}</p>

                <p> Cantidad: {pizza.count}</p>

                <button className="btn btn-dark" onClick={() => aumentarCantidad(pizza.id)}> + </button>

                <button className="btn btn-dark" onClick={() => disminuirCantidad(pizza.id)}> - </button>
                 

            </div>
           

        
        
        )
      }

      <h2> Total: ${total}</h2>

      <button className="btn btn-dark"> Pagar </button>
    </>
  )
}

export default Cart
