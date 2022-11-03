import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { useContext } from 'react';
import { CartContext } from '../context/CartContext';

function CartWidget() {
    const {cartQuantity}= useContext(CartContext);
    return (
        <div>
        <FontAwesomeIcon icon={faCartShopping} /><span> {cartQuantity()} </span>
        </div>
    )
}

export default CartWidget;