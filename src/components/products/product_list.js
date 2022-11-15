import ProductRow from "./product_row";
//import localJson from "../mock/mock_data.json"
import { useEffect, useState } from "react";


function FetchProducts(){
    // Get products from python backend
    const [products, setProducts] = useState([]);
    
    useEffect(()=>{
        fetch('http://localhost:8080/products',{
            crossDomain:true,
            'methods':'GET',
            headers : {
            'Content-Type':'application/json'
          }
        })
        .then(response => response.json())
        .then(response => setProducts(response))
        .catch(error => console.log(error))
    
        },[])
  
        console.log(products)

        const row = products.map( (item) =>
            <ProductRow id={item.id} name={item.name} price={item.price}/>
    );
      
        return(
            <div className="product-list">
                {row}
            </div>
            
        )
}

export default function ProductList() {
    return (
        <>
            <FetchProducts />
        </>
    )
}
