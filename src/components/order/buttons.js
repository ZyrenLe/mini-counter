


function CancelButton({resetCount}) {

    // Cancel all and set count to 0

    return (
        <button onClick={resetCount}>
            Abbrechen
        </button>    
    )   
}

function SubmitButton({products, resetCount}) {

    // Submit to Backend
    // WHERE count != 0
    function sendToBackend(){
        products.map( (item)=>{
            if (item.count !== 0){
              console.log('id: '+item.id+', count: '+item.count);
            }
        })
    }

    function send(){
        sendToBackend();
        resetCount();
    }

    return (
        <button onClick={send}>
            Bestätigen
        </button>    
    )   
}

export default function OrderButtons({products, resetCount}) {
    return (
        <div className="order-buttons">
            
            <CancelButton resetCount={resetCount} />
            <SubmitButton products={products} resetCount={resetCount} />

        </div>
    )
}