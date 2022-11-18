import { useState, useEffect } from "react";


function useFetch(url, setFetching){
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
            .then(data => setProducts(data), setFetching(false))
            .catch(error => console.log(error))
    
        },[url,setFetching])
  
        return products;
}



export default useFetch;