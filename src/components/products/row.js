
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

    function getID(elmnt){
        const parent = elmnt.parentElement.parentElement;
        const id = parent.id;
        return id;
    }

    function decrease(e){
        decreaseCount( getID(e.target) );

    }

    function increase(e){
        increaseCount( getID(e.target) );

    }

    // TODO call setState with args
    return (
        <div className="product row counter" key={"counter"}>
            <button className="decrease" onClick={ (e)=>{ decrease(e) } }> - </button>
            <div className="counter-number">{count}</div> 
            <button className="increase"onClick={ (e)=>{ increase(e) } }> + </button>
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