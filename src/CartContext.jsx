import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children}) => {
    const [cart, setCart] = useState([])

    const addToCart = (pizza) => {
        const hayPizza = cart.find ((item) => item.id === pizza.id)

        if (hayPizza) {
            setCart(
                cart.map((item)=>
                item.id === pizza.id
                    ?{ ...item, cantidad: item.cantidad + 1}
                    :item
                        )

            )
        }

        else{
            setCart([...cart, {...pizza, cantidad: 1}])
        }
    }

    const removeFromCart = (id) => {
        const hayPizza = cart.find ((item)=> item.id === id);

        if (hayPizza.cantidad > 1){
            setCart(
                cart.map((item) =>
                item.id === id
                    ? { ...item, cantidad:item.cantidad - 1}
                : item)
            )
        }

        else{
            setCart(cart.filter ((item) => item.id !== id))
        }
    }


    const total = cart.reduce (
        (count, item) => count + item.price*item.cantidad, 0
    )

    return(
        <CartContext.Provider value ={{
            cart,
            addToCart,
            removeFromCart,
            total,
        }}> 
        {children}
        </CartContext.Provider>
    )
}

