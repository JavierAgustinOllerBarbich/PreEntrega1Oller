import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import Button from 'react-bootstrap/Button';

function CartWidget() {
    return (
        <div>
        <FontAwesomeIcon icon={faCartShopping} /><span>1</span>
        </div>
    )
}

export default CartWidget;