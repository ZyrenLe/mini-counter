import './App.css';
import List from './components/products/list';
import Orders from './components/order/orders';
import { useState } from 'react';
import { config } from './mock/config';

function App() {

  // States
  const temp = config;
  const [products,setProducts] = useState(temp);
  const [sum, setSum] = useState(()=>{
    let totalSum = 0;
    products.map((item)=>{
      if( item.count !== 0 ){
        totalSum = totalSum + parseFloat(item.price.replace(',', '.'))*item.count;
      }
    })
    return totalSum
  });

  const [showStats, setShowStats] = useState(false);


  
  function test() {
    setShowStats(oldBool => !oldBool);
    console.log(showStats);
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
      {!showStats && <Headline /> }
      {!showStats && <List products={products} decreaseCount={decreaseCount} increaseCount={increaseCount} />}
      {!showStats && <Orders products={products} resetCount={resetCount} updateSum={updateSum} sum={sum} />}
      </header>
      <button onClick={test}>here</button>
    </div>
  );
}

export default App;
