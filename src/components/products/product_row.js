import Counter from "./counter"

function Product({name}) {
    return (
        <div className="product name">{name}</div>
    )
}

function Price({price}) {
    return (
        <div className="product price">{price}</div>
    )
}

export default function ProductRow({id, name, price}) {
    return (
        <div className="product-row" id={id}>
            <Product name={name} />
            <Counter />
            <Price price={price} />
        </div>
    )
}