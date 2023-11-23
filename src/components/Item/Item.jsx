import React from 'react';
import item from '../Item/item.css'
import { Link } from 'react-router-dom';

const Item = ({product}) => {

    return (
        <>
        <div className='contenedor'>
            <Link to={`/item/${product.id}`}>
                <h1>{product.name}</h1>
            </Link>
            <img src={product.img} alt={product.name}/>
        </div>
        </>
    );
};

export default Item;