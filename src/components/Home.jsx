import Header from "./Header"
import CardPizza from "./CardPizza"

const Home = () => {
  return (
    <>
      <Header />
      <br></br>

      <div className="d-flex flex-wrap justify-content-center gap-3 mt-4">

        <CardPizza
          name="Napolitana"
          price={5950}
          ingredients={[
            'mozzarella',
            'tomates',
            'jamón',
            'orégano',
          ]}
          img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZvchbHh7QvpHvjnJ3cwz_KM12dsHFKdZ9wA&s"
        />
        <br></br>

        <CardPizza
          name="Española"
          price={6950}
          ingredients={[
            'mozzarella',
            'gorgonzola',
            'parmesano',
            'provolone',
          ]}
          img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRn1X_sSI1r_HA3cOxwZ6yplDQ-8xz6T5vH0Q&s"
        />
        <br></br>

        <CardPizza
          name="Pepperoni"
          price={6950}
          ingredients={[
            'mozzarella',
            'pepperoni',
            'orégano',
          ]}
          img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTI0-HmskFIOzX-o3_DTZdgLshMNluWvZpwAw&s"
        />

      </div>
    </>
  )
}

export default Home