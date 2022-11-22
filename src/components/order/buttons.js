import Bestätigung from "../settings/modal";

function CancelButton({resetCount}) {

    // Cancel all and set count to 0

    return (
        <button onClick={resetCount} className="btn btn-secondary">
            Abbrechen
        </button>    
    )   
}
/***/

 
export default function OrderButtons({products, resetCount}) {

    return (
        <div className="order-buttons">
            
            <CancelButton resetCount={resetCount} />
            <Bestätigung products={products} resetCount={resetCount}/>

        </div>
    )
}