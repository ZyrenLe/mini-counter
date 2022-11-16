import Row from "./row";

export default function List({products, decreaseCount, increaseCount}){
    // List all product rows
    // Give id, name, price, counter to rows 

    // Loop list
    //<Row id={} name={} price={} count={} decreaseCount={} increaseCount={} />
    // Loop end

    const row = products.map( (item)=>{
        const id = item.id;
        const name = item.name;
        const price = item.price;
        const count = item.count;
        return <Row id={id} name={name} price={price} count={count} decreaseCount={decreaseCount} increaseCount={increaseCount} />
    })

    return (
        <div className="product list">
            {row}
        </div>
    )

}