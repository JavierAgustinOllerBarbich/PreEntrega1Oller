import React, { useEffect, useState } from 'react';
import ItemList from './ItemList'; 
import { products } from '../../Mock/productsMock';
import { useParams } from 'react-router-dom';
import RotateLoader  from 'react-spinners/RotateLoader';

const ItemListContainer = () => {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true)

    

    const { categoryName } = useParams();
 

    useEffect(() => {
        const traerProductos = () => {
            setLoading(true)
            return new Promise((res, rej) => {
                const prodFiltrados = products.filter(
                    (prod) => prod.category === categoryName
                );
                const prod = categoryName ? prodFiltrados : products;
                setTimeout(() => {
                    res(prod);
                }, 500);
            });
        };
        traerProductos()
            .then((res) => {
                setItems(res);
            })
            .catch((error) => {
                console.log(error);
            })
            .finally (()=>{
                setLoading(false);
            });
        
       
    }, [categoryName]);



    return (
        <main>
        {loading?
                <div className="item-list-container">
                <RotateLoader style={{marginTop:'100px' }}color='black'/>
                </div>
                :<div className="item-list-container">
                        <ItemList items={items} />
                </div>  
        }
        </main>
    );
};

export default ItemListContainer;