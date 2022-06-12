import React from 'react'
import "./productDetail.scss"
import formatPrice from '../../utils/format';
import AddIcon from "../../assets/add-icon.svg"

function ProductDetail({picture, title, category , price, description, addToCart}) {

    return (
        <div className="product-detail-container">
            <div className="product-detail__image">
                <img src={picture} alt={title} />
            </div>
            <div className="product-detail__info">
                <h1>{title}</h1>
                <p className='product-detail__price'>{formatPrice(price)}</p> 
                <p><strong>Categoria : </strong>{category}</p>
                <p className='product-detail__description'><strong>Descripción : </strong>{description}</p>
                 <button className='product-detail__add-to-cart' onClick={()=>addToCart()}>Añadir al carrito <img src={AddIcon}/></button>
            </div>
        </div>
    )
}

export default ProductDetail