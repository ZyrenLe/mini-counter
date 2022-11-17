import './App.css';
import List from './components/products/list';
import Orders from './components/order/orders';
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
      price : "5,50",
      count : 3
    },
    {
      id : "3",
      name : "Fisch",
      price : "5,00",
      count : 0
    }
  ]


  // States
  const [products,setProducts] = useState(produkt_liste);
  const [sum, setSum] = useState(()=>{
    let totalSum = 0;
    products.map((item)=>{
      if( item.count !== 0 ){
        totalSum = totalSum + parseFloat(item.price.replace(',', '.'))*item.count;
      }
    })
    return totalSum
  });

  

  function test() {
    console.log(sum);
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

  function resetCount(){
    setProducts(
      products.map( (item)=>{  
        item.count = 0;
        return item;
      })
    )
  }

  // Handler: Sum
  function updateSum(){
    setSum(()=>{
      let totalSum = 0;
      products.map((item)=>{
        if( item.count !== 0 ){
          totalSum = totalSum + parseFloat(item.price.replace(',', '.'))*item.count;
        }
      })
      return totalSum
    })
  }


  function Headline(){
    return <div className='headline'>Bestellung</div>
  }

  return (
    <div className="App">
      <header className="App-header">
        <Headline />
        <List products={products} decreaseCount={decreaseCount} increaseCount={increaseCount} />
        <Orders products={products} resetCount={resetCount} updateSum={updateSum} sum={sum} />
      </header>
      <button onClick={test}>test</button>
    </div>
  );
}

export default App;
