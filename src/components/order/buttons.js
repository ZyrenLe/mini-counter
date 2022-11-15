


function CancelButton() {
    return (
        <button >
            Abbrechen
        </button>    
    )   
}

function SubmitButton() {

    function getOrders() {
            const orders = document.getElementsByClassName("product-row");
            for(let row of orders){
                let id = row.id;
                let name = row.querySelectorAll('.name')[0].innerHTML;
                let counter = row.querySelectorAll('.counter')[0].innerHTML;

                console.log(id);
                console.log(name);
                console.log(counter);

                row.querySelectorAll('.counter')[0].innerHTML = 0;
            }
            
        return 
    }

    return (
        <button onClick={getOrders}>
            Bestätigen
        </button>    
    )   
}

export default function OrderButtons() {
    return (
        <div className="order-buttons">
            
            <CancelButton />
            <SubmitButton />

        </div>
    )
}