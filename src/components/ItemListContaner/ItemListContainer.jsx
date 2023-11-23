import React, {useState, useEffect} from 'react';
import ItemList from '../ItemList/ItemList';
import "./itemListContainer.css"
import { useParams } from 'react-router-dom';

const ItemListContainer = () => {

    const [products, setProducts] = useState([]);
    const {categoryId} = useParams()

    useEffect(()=>{
        const fetchData = () => {
            return fetch("/productos.js")
                .then((response) => response.json())
                .then((data) => {
                    if (categoryId) {
                        const filterProducts = data.filter(p => p.category === categoryId)
                        setProducts(filterProducts)
                    } else {
                        setProducts(data)
                    }

                })
                .catch((error) => console.log(error))
        }

        fetchData()

    }, [categoryId])

    return (
        <>
        {products.length == 0
        ?
        <p>Cargando...</p>
        :
        <ItemList products={products}/>}
        </>
    );
};

export default ItemListContainer;