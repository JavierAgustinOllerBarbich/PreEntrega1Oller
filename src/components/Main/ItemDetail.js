import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import ItemCount from './ItemCount';

const ItemDetail = ({ item }) => {
    const [unidades, setUnidades]= useState (0);

    const{addItem, cartQuantity} = useContext(CartContext);

    const prueba = (numero) => {
        setUnidades(numero);
        addItem(item, numero);
    };

   const quantity= cartQuantity(item.id);

    return (
        <div className="container-detail">
            <img src={item.img} alt="" />
            <div>
                <h2>{item.title}</h2>
                <p>
                    Las mejores sneakers al alcance de tu mano
                </p>
                <p>
                    No dudes en consultarnos!
                </p>

               {unidades === 0 ? (
                    <ItemCount 
                        stock={10} 
                        initial={quantity} 
                        prueba={prueba} 
                    />
                ) : (
                    
                    <Link className="cartLink" to="/cart">Ir al carrito</Link>

                 )} 
               
                
            </div>
        </div>
    );
};

export default ItemDetail;

