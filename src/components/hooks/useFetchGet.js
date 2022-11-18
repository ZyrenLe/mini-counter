import { useState, useEffect } from "react";


function useFetch(url){
    // Get products from python backend
    const [products, setProducts] = useState([]);
    
    useEffect(()=>{
        const req_options = {
            crossDomain:true,
            'methods':'GET',
            headers : { 'Content-Type':'application/json' },
        };
        fetch(url,req_options)
            .then(response => response.json())
            .then(data => setProducts(data))
            .catch(error => console.log(error))
    
        },[url])
  
        return products;
}

export default useFetch;