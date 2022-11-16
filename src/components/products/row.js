function Product({name}) {
    return (
        <div className="product row name" key={"name"}>{name}</div>
    )
}

function Price({price}) {
    return (
        <div className="product row price" key={"price"}>{price}</div>
    )
}

function Counter({count, decreaseCount, increaseCount}){
    return (
        <div className="product row counter" key={"counter"}>
            <button className="decrease" onClick={ decreaseCount } key={"decrease"}> - </button>
            <div className="counter-number" key={"number"}>{count}</div> 
            <button className="increase"onClick={ increaseCount } key={"increase"}> + </button>
        </div>
    )
}

export default function Row({id, name, price, count, decreaseCount, increaseCount}) {
    return (
        <div className="product-row" id={id} key={id}>
            <Product name={name} />
            <Counter count={count} decreaseCount={decreaseCount} increaseCount={increaseCount} />
            <Price price={price} />
        </div>
    )
}