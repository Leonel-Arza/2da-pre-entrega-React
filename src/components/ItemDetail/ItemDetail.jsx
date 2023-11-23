import React from 'react';
import ItemCount from '../ItemCount/ItemCount';

const ItemDetail = ({producto}) => {

    const onAdd = (quantity) => {
        alert (quantity)
    }
    
    return (
        <div>
            <img src={producto.img} alt={producto.name}/>
            <h2>{producto.name}</h2>
            <p>Stock: {producto.stock}</p>
            <p>Precio: {producto.price}</p>
            <p>Categoria: {producto.category}</p>
            <p>Descripcion: {producto.description}</p>
            <ItemCount initial={1} stock={producto.stock} onAdd={onAdd}/>
        </div>
    );
};

export default ItemDetail;