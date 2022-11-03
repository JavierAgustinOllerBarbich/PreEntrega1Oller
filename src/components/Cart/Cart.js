import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext';


const Cart = () => {
    const { cart, total , borrarUno, deleteAll } = useContext(CartContext);

    return (
        <div>
            {cart.map((prod) => (
                <div
                    key={prod.id}
                    style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        border: '1px solid black',
                        padding: '25px',
                        margin: '25px',
                    }}
                >
                    <img src={prod.img} alt={prod.title} width="180px" />
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <h2>{prod.title}</h2>
                        <h3 style={{ margin: '0px 10px' }}>$ {prod.price}</h3>
                        <h3>Cantidad: {prod.quantity}</h3>
                    </div>
                    <button onClick={() => borrarUno(prod.id)}>Borrar</button>
                </div>
            ))}
            <h2>Total: ${total()}</h2>
            <button onClick={deleteAll}>Eliminar todo el carrito</button>
            <Link 
                 style={{
                    border: '1px solid black',
                    padding: '3px 5px',
                    borderRadius: '8px',
                }}
                className="cartLink" to='/checkout'>Comprar</Link>
        </div>
    );
};

export default Cart;