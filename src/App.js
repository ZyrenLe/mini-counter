import logo from './logo.svg';
import './App.css';
import ProductList from './components/products/product_list';
import OrderButtons from './components/order/buttons';
import { useState } from 'react';

      // <ProductList />
      // <OrderButtons />
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
      name : "Glühwein mit Schuss",
      price : "7,00",
      count : 1
    }
  ]
  const [bestellung,setBestellung] = useState(produkt_liste);

  function test() {
    return console.log(bestellung);
  }

  function changeState() {
    setBestellung(
      bestellung.map( (item)=>{
        if (item.count !== 0){
          const id = item.id;
          const count = item.count;
        }
        return item;
      })
    )
    return console.log(bestellung);
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <button onClick={test}>test</button>
        <button onClick={changeState}>change</button>
      </header>
    </div>
  );
}

export default App;
