import React, {useState} from 'react';
import ItemmCount from '../ItemCount/itemCount.css'

const ItemCount = ({initial, stock, onAdd}) => {
    
    const [count, setCount] = useState (initial)

    const increment = () => {
        if (count < stock) {
            setCount(count+1)
    }
}

    const decrement = () => {
        if (count > initial) {
            setCount(count-1)
    }
}

    return (
        <div className='Count'>
            <button onClick = {increment}>+</button>
            <span>{count}</span>
            <button onClick = {decrement}>-</button>
            <button onClick={()=>{onAdd(count)}}>Agregar al Carrito</button>
        </div>
    );
};

export default ItemCount;