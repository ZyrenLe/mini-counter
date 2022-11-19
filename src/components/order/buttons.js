
function CancelButton({resetCount}) {

    // Cancel all and set count to 0

    return (
        <button onClick={resetCount}>
            Abbrechen
        </button>    
    )   
}
/***/
function SubmitButton({products, resetCount}) {

    // Submit to Backend
    // WHERE count != 0
    function sendToBackend(){
        products.map( (item)=>{
            if (item.count !== 0){
                const data = {id:parseInt(item.id), count:item.count};
                post(data);
            }
        })
    }

    // Send Post request
    async function post(data){
        // Post products to python backend        
        const req_options = {
            method : 'POST',
            crossDomain : true,
            headers : { 'Content-Type':'application/json' },
            body: JSON.stringify(data)
        };
        fetch('http://localhost:8080/test',req_options)
            .catch(error => console.log(error))
        return 'done';
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