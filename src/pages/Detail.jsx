import React from 'react'
import { useParams } from "react-router-dom";
import ProductDetail from '../components/ProductDetail/ProductDetail'
import { useDispatch, useSelector } from "react-redux";
import { setListProducts } from "../slices/productSlide";

function Detail() {

  const { id } = useParams();
  let [product, setProduct] = React.useState({});
  let [ids, setIds] = React.useState("");

  //Dispatch to send the data to the global store 
  const dispatch = useDispatch();


  const addToCart = () => {
    alert("Producto agregado al carrito");
    dispatch(setListProducts(product));
  }
  

  const getDetail = () => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then(res => res.json())
      .then(result => {
        setProduct(result);
      })
  }

  React.useEffect(() => {
    getDetail();
  }
    , [])

  return (
    <div>
      <ProductDetail key={product.id} title={product.title} category={product.category}
        price={product.price} description={product.description} picture={product.image} addToCart={() => addToCart()} />
    </div>
  )
}

export default Detail