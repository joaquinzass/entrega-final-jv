import React from "react";
import './styles.css';
import Button from 'react-bootstrap/Button';
import CartWidget from "../CartWidget/CartWidget";

const NavBar = () => {
  return (
    <div className="navbar-container">
        <div>
            <img src="./Images/TiendaDigital.png" alt="Tienda Digital" width={"300px"}/>
        </div>

        <div className="right-container">
          <ul className="list-container">
            <li><Button className="botones">Productos</Button></li>
            <li><Button className="botones">Sobre nosotros</Button></li>
            <li><Button className="botones">Contacto</Button></li>
          </ul>

          
        </div>
        <CartWidget/>
    </div>
  )
}

export default NavBar;