import OrderButtons from "./buttons"
import '../../css/orders.css'

function OrderItem({id, name, count, price}){
    const price_float = price.replace(',', '.');
    const total = parseFloat(price_float)*count;
    return (
        <div className="orders item" id={id} key={id}>
            <div className="orders name" key={"name"}>{name}</div>
            <div className="orders count" key={"count"}>{count}</div>
            <div className="orders multiplicator" key={"mult"}>x</div>
            <div className="orders total" key={"total"}>{total.toFixed(2)}</div>
        </div>
    )
}

export default function Orders({products, resetCount, updateSum, sum}){
    

    const order = products.map( (item)=>{
        if (item.count !== 0){
            const id = item.id;
            const name = item.name;
            const price = item.price;
            const count = item.count;
            return <OrderItem id={id} name={name} price={price} count={count} />
        }
    })

    updateSum();

    return (
        <section className="orders summary">
            <div className="orders list" >{order}</div>
            {sum != 0 && <div className="orders sum" ><div className="gesamt">Gesamt</div><div className="summe">{sum.toFixed(2)}</div></div>}
            {sum != 0 && <OrderButtons products={products} resetCount={resetCount} />}
        </section>
    )
}