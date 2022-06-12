//Router for navigation 
import { Route, Switch } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';


//Pages
import Home from "./pages/Home";
import Detail from "./pages/Detail";
import Cart from "./pages/Cart";
import Navbar from './components/Navbar/Navbar';
import Checkout from './pages/Checkout';

function App() {

  //Products in the cart
  const products = useSelector((state) => state.product.listProducts);
  const [cart, setCart] = useState("");

  const addToCart = () => {
    products.length > 0 ? setCart("countProducts") : setCart("disabled");
  }

  useEffect(() => {
    addToCart();
  }
    , [products]);

  return (

    <>
      <Navbar count={products.length} disabled={cart} ></Navbar>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/product-detail/:id" component={Detail} />
        <Route exact path="/cart" component={Cart} />
        <Route exact path="/checkout" component={Checkout} />
      </Switch>

    </>

  );
}

export default App;
