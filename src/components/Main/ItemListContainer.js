import React, { useEffect, useState } from 'react';
import ItemList from './ItemList'; 
import { useParams } from 'react-router-dom';
import RotateLoader  from 'react-spinners/RotateLoader';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '../../services/firebaseConfig';

const ItemListContainer = () => {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true)

    

    const { categoryName } = useParams();
 

    useEffect(() => {
       
        const collectionProd= collection (db, 'productos')
       
        const referencia = categoryName
            ? query(collectionProd, where('category', '==', categoryName) )
            : collectionProd
        
            
        getDocs(referencia)
            .then((res)=> {
                const products = res.docs.map((prod) => {
                    return{
                        id:prod.id,
                        ...prod.data(),
                    };
                });
            
               setItems(products)
             })
            .catch((error)=> {
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
                <RotateLoader color='black'/>
                </div>
                :<div className="item-list-container">
                        <ItemList items={items} />
                </div>  
        }
        </main>
    );
};

export default ItemListContainer;