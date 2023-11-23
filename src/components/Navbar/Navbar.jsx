import React from 'react';
import "./navbar.css"
import CartWidget from '../CartWidget/CartWidget';
import { Link } from 'react-router-dom';

const Navbar = () => {

    const enlaces = [
        "Carretera",
        "Electronicos",
        "Deportes",
        "Vehiculos",
        "Accesorios",
        "Contacto"
    ]

    return (
        <div>
            <Link to={"/"}>
            <h1 className='titulo'>Libre Mercado</h1>
            </Link>
            <nav>
            <ul className='nav'>
                {enlaces.map((e, id) =>
                    <li key={id}>
                        <Link to={`${e}`}>
                            {e}
                        </Link>
                    </li>
                )}
            <CartWidget/>
            </ul>
            </nav>
        </div>
    );
}

export default Navbar;