import logo from './logo.svg';
import './App.css';
import ProductList from './components/products/product_list';
import OrderButtons from './components/order/buttons';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      <ProductList />
      <OrderButtons />
      </header>
    </div>
  );
}

export default App;
