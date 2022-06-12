import React from 'react'
import "../scss/Checkout/checkout.scss"

function Checkout() {

  const endMessage = () => {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone").value;
    let address = document.getElementById("address").value;
    let city = document.getElementById("city").value;

    if (name === "" || email === "" || phone === "" || address === "" || city === "") {

    } else {

      alert("Gracias por tu compra")
    }
  }

  return (
    <div className='checkout-container'>

      <div className="checkout-form">
        <div className="checkout-form-title">
          <h1>Checkout</h1>
        </div>
        <form>

          <div className="checkout-form-row">
            <input type="text" placeholder="Nombre" id='name' required />
          </div>

          <div className="checkout-form-row">
            <input type="email" placeholder="Email" id='email' required />
          </div>

          <div className="checkout-form-row">
            <input type="text" placeholder="Teléfono" id="phone" required />
          </div>

          <div className="checkout-form-row">
            <input type="text" placeholder="Dirección" id='address' required />
          </div>

          <div className="checkout-form-row">
            <input type="text" placeholder="Ciudad" id='city' required />
          </div>

          <div className="checkout-form-row">
            <button type="submit" onClick={()=>endMessage()} >Realizar compra</button>
          </div>

        </form>
      </div>

    </div>
  )
}

export default Checkout