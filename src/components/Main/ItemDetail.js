import { useContext, useState } from 'react';
import { CartContext } from '../context/CartContext';
import ItemCount from './ItemCount';

const ItemDetail = ({ item }) => {
    const [unidades, setUnidades]= useState (0);

    const{addToCart} = useContext(CartContext);

    const prueba = (numero) => {
        setUnidades(numero);
        addToCart(item, numero);
    };

    /*if (true) {
        return <h1>Muestro esto</h1>;
    }
    */
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
                
                {
                     <h2 style={{ color: unidades === 0 ? 'red' : 'blue' }}>
                     {unidades === 0
                         ? `Hay ${unidades} unidades`
                         : `Ya agregaste`}
                 </h2>
                }
                <ItemCount stock={10} initial={1} />
            </div>
        </div>
    );
};

export default ItemDetail;