import logo from './logo.svg';
import './App.css';
import List from './components/products/list';
import { useState } from 'react';


/**
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
 */

function App() {
  const produkt_liste = [
    {
        id : "1",
        name : "Glühwein",
        price : "6,00",
        count : 0
    },
    {
      id : "2",
      name : "Cider",
      price : "5,00",
      count : 3
    },
    {
      id : "3",
      name : "Fisch",
      price : "5,00",
      count : 0
    }
  ]

  const [products,setProducts] = useState(produkt_liste);

  function test() {
    return console.log(products);
  }


// Handler: Counter
  function increaseCount(id){
    setProducts(
      products.map( (item)=>{
        if (item.id === id){
          item.count = item.count+1;
        }
        return item;
      })
    )
  }

  function decreaseCount(id){
    setProducts(
      products.map( (item)=>{
        if (item.id === id){
          item.count = item.count-1;
        }
        return item;
      })
    )
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <button onClick={test}>test</button>
        <List products={products} decreaseCount={decreaseCount} increaseCount={increaseCount} />
      </header>
    </div>
  );
}

export default App;
