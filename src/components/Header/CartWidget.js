import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import Button from 'react-bootstrap/Button';
import { products } from '../../Mock/productsMock';
import { useContext } from 'react';
import { CartContext } from '../context/CartContext';

function CartWidget() {
    const {total}= useContext(CartContext);
    return (
        <div>
        <FontAwesomeIcon icon={faCartShopping} /><span> {total()} </span>
        </div>
    )
}

export default CartWidget;