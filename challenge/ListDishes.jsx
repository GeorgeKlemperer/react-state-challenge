import dishes from "./data.js";

function ListDishes (props) {
    const filteredDishes = props.category === "all"
  ? dishes.filter(dish => dish.price <= props.max)
  : dishes.filter(dish => dish.price <= props.max && dish.category === props.category);


    return <ul className="grid">
    {filteredDishes.map((dish) => (
      <li key={dish.id} className="card">
        <h3>{dish.name}</h3>
        {dish.description && <p>{dish.description}</p>}
        <div>£{dish.price.toFixed(2)}</div>
      </li>
    ))}
  </ul>
}

export default ListDishes