import React from 'react'
import "./navbar.scss";

import Logo from "../../assets/logo.svg";
import Cart from "../../assets/cart-icon.svg";

import { useHistory } from "react-router-dom";
import { useEffect, useState } from "react";


function Navbar({ count, disabled }) {
    const [element, setQuery] = useState("");
    const eventEnter = (evt) => (evt.key === "Enter" ? alert("buscaras un producto") : "");

    let history = useHistory();

    const gohome = () => {
        history.push("/");
    }

    const gocart = () => {
        history.push("/cart");
    }



    return (
        <div className='navbar-container'>

            <div className="navbar-content">

                <div className="navbar-logo">
                    <p onClick={() => { gohome() }}>Product store</p>
                </div>

                <div className="navbar-search-bar">

                    <input type="text"
                        onChange={(e) => setQuery(e.target.value)}
                        value={element}
                        onKeyPress={eventEnter}
                        className="searchBar"
                        placeholder="Buscar productos"
                        disabled />

                </div>

                <div className="navbar-shopping-cart">
                    {/* countProducts */}
                    <div className={disabled}>
                        <p>{count}</p>
                    </div>
                    <img src={Cart} alt="cart" onClick={() => {
                        gocart();
                    }} />
                </div>
            </div>

        </div>
    )
}

export default Navbar