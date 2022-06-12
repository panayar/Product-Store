import React, { useEffect } from 'react'
import { useSelector } from "react-redux";
import CartProduct from '../components/CartProduct/CartProduct'
import "../scss/Cart/cart.scss"
import formatPrice from '../utils/format'



import { useHistory } from "react-router-dom";
import Image from "../assets/producto.png"

function Cart() {

  //Products in the cart
  const products = useSelector((state) => state.product.listProducts);

  console.log(products)


  let history = useHistory();

  const goCheckout = () => {

    history.push("/checkout");

  }


  const getTotalPrice = () => {
    let total = 0;
    products.forEach(product => {
      total += product.price;
    }
    )
    return total;
  }


  return (
    <div className='cart-container'>

      <div className="cart-products">

      </div>
      {
        products.map((product) => {
          return (
            <CartProduct key={product.id} title={product.title} category={product.category}
              price={product.price} description={product.description} image={product.image} />

          )
        }
        )}

      <br />
      <div className="cart-total-price">
        <p>Total : </p>
        <h3>{formatPrice(getTotalPrice())}</h3>
      </div>

      <div className="cart-btn-checkout">
        <button onClick={() => goCheckout()}>Checkout</button>
      </div>

      <br />
    </div>
  )
}

export default Cart