import React from 'react';
import "./itemListContainer.css"

const ItemListContainer = ({welcome}) => {

    return (
        <h1 className='mensaje'>{welcome}</h1>
    );
};

export default ItemListContainer;