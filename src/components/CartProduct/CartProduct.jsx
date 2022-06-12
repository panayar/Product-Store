import React from 'react'
import "./cartProduct.scss"
import formatPrice from '../../utils/format'

function CartProduct({ image, title, price }) {
  return (

    <div className='cart-product-container'>
      <div className='cart-product__image'>
        <img src={image} alt={title} />
      </div>
      <div className='cart-product__title'>
        <p>{title}</p>
      </div>
      <div className='cart-product__price'>
        <p>{formatPrice(price)}</p>
      </div>
    </div>
  )
}

export default CartProduct