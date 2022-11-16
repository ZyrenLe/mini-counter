import logo from './logo.svg';
import './App.css';
import List from './components/products/list';
import { useState } from 'react';


function App() {
  const produkt_liste = [
    {
        id : 1,
        name : "Glühwein",
        price : "6,00",
        count : 0
    },
    {
      id : 2,
      name : "Cider",
      price : "5,00",
      count : 3
    },
    {
      id : 3,
      name : "Fisch",
      price : "5,00",
      count : 0
    }
  ]

  const [products,setProducts] = useState(produkt_liste);

  function test() {
    return console.log(products);
  }

  function changeState() {
    setProducts(
      products.map( (item)=>{
        if (item.count !== 0){
          const id = item.id;
          const count = item.count;
          item.price = "44,44";
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
        <button onClick={changeState}>change</button>
        <List products={products} decreaseCount={test} increaseCount={test} />
      </header>
    </div>
  );
}

export default App;
