import React, {useState, useEffect} from 'react';
import ItemList from '../ItemList/ItemList';
import "./itemListContainer.css"
import { useParams } from 'react-router-dom';

const ItemListContainer = () => {

    const [products, setProducts] = useState([]);
    const {categoryId} = useParams()

    useEffect(()=>{
        const promiseData = () => {
            return new Promise ((resolve) => {
                setTimeout(()=> {

                    const productosFile = "/productos.js"

                    fetch(productosFile)
                    .then((response)=>response.json())
                    .then((data)=>{
                        resolve(data)
                    })

                },2000)
            })
        }
        promiseData().then((data) =>{
            setProducts(data)
        })

    },[])

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