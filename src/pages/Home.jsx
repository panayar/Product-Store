import React from 'react'
import Product from '../components/Product/Product'
import ProductImg from '../assets/producto.png'
import { useHistory } from "react-router-dom"
import "../scss/Home/home.scss";

import { useEffect } from 'react';

function Home() {

  let [products, setProducts] = React.useState([]);
  let [categories, setCategories] = React.useState([]);
  let history = useHistory();


  const getCategories = () => {
    fetch('https://fakestoreapi.com/products/categories')
      .then(res => res.json())
      .then((result) => {
        const products = result;
        
        const selectCategory = document.querySelector("#categories");
        products.forEach(category => {
          selectCategory.innerHTML += `<option value="${category}">${category}</option>`;
        })

      })
  }


  const getProducts = () => {
    let selectCategory = document.querySelector("#categories");
    selectCategory = selectCategory.options[selectCategory.selectedIndex].value;

    fetch(`https://fakestoreapi.com/products/category/${selectCategory}`)
      .then(res => res.json())
      .then(result => {
        //get product by category 
        setProducts(result);

      })
  }


  useEffect(() => {
    getCategories();
    getProducts();
  }, [])


  //Method to get more information about a product
  const goDetail = (id) => {
    history.push(`/product-detail/${id}`);
  };

  return (
    <div className='home-container'>

      <div className="home-categories">
        <select name="cars" id="categories" className="input-categorias form-select" onChange={() => getProducts()}>
          <option value="volvo">Selecciona una categoria</option>
        </select>
      </div>

      {
        products.map(product => {
          return (
            <div key={product.id} onClick={() => goDetail(product.id)}>
              <Product key={product.id} picture={product.image} title={product.title} price={product.price} category={product.category} />
            </div>
          )

        })
      }
    </div>
  )
}

export default Home